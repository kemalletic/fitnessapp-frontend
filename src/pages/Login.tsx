import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { login } from '../store/authSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/img/background1.jpg';

type Props = {};

export type LoginFormData = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const { loading, userToken, error } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const onSubmit = (data: LoginFormData) => {
    dispatch(login(data));
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover', // You can adjust this value to 'contain' or '50%' as needed
      backgroundPosition: 'center', // Adjust the position as needed
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
    },
    content: {
      textAlign: 'center' as 'center',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
    },
    formCard: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      width: '100%',
      maxWidth: '400px',
      padding: '20px',
      borderRadius: '10px',
      border: '2px solid #fff',
    },
    title: {
      fontSize: '2.5rem',
      color: '#fff',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#fff',
      marginBottom: '40px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '2px solid #fff',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    dontHaveAccountText: {
      color: '#fff',
      marginTop: '10px',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <div style={styles.formCard}>
            <h1 style={styles.title}>Log In</h1>
            <p style={styles.subtitle}>Enter your credentials to log in.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                style={styles.input}
              />
              {errors.email && (
                <small style={{ color: 'red', marginBottom: '15px' }}>{errors.email.message}</small>
              )}
              <input
                type="password"
                placeholder="Password"
                {...register('password')}
                style={styles.input}
              />
              {errors.password && (
                <small style={{ color: 'red', marginBottom: '15px' }}>{errors.password.message}</small>
              )}
              <button type="submit" style={styles.button} disabled={loading}>
                {loading ? 'Submitting...' : 'Log in'}
              </button>
            </form>
          </div>
          <div style={styles.dontHaveAccountText}>
            Don't have an account? <Link to="/register">Sign up here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
