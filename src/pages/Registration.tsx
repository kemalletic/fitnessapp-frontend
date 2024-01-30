import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { registerUser } from '../store/authSlice';
import backgroundImg from '../assets/img/background1.jpg';

type Props = {};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
};

const schema = yup
  .object({
    firstName: yup.string().required('First name is required.'),
    lastName: yup.string().required('Last name is required.'),
    email: yup.string().email().required('Email is required.'),
    username: yup.string().min(6).max(20).required('Username is required.'),
    password: yup.string().min(8).required('Password is required.'),
  })
  .required();

const Registration = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema),
  });

  const { loading, userToken, error, success } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect user to login page if registration was successful
    if (success) navigate('/login');
    // Redirect authenticated user to home screen
    if (userToken) navigate('/home');
  }, [navigate, userToken, success]);

  const onSubmit = (data: RegisterFormData) => {
    dispatch(registerUser(data));
  };

  const styles: Record<string, React.CSSProperties> = {
    container: {
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
      width: '150%', // Adjusted width
      maxWidth: '500px', // Increased max width
      padding: '15px',
      borderRadius: '10px',
      border: '2px solid #fff',
    },
    title: {
      fontSize: '2.5rem',
      color: '#fff',
      marginBottom: '20px',
    },
    inputLabel: {
      color: '#ddd', // Gray color for input labels
      textAlign: 'left' as 'left',
      marginBottom: '5px',
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
    haveAccountText: {
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
            <h1 style={styles.title}>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3 has-validation d-flex">
                <div style={{ flex: '1', marginRight: '10px' }}>
                  <label style={styles.inputLabel}>First name</label>
                  <input type="text" className="form-control" {...register('firstName')} style={styles.input} />
                  {errors.firstName && (
                    <small style={{ color: 'red' }}>{errors.firstName.message}</small>
                  )}
                </div>
                <div style={{ flex: '1' }}>
                  <label style={styles.inputLabel}>Last name</label>
                  <input type="text" className="form-control" {...register('lastName')} style={styles.input} />
                  {errors.lastName && (
                    <small style={{ color: 'red' }}>{errors.lastName.message}</small>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label style={styles.inputLabel}>Username</label>
                <input type="text" className="form-control" {...register('username')} style={styles.input} />
                {errors.username && (
                  <small style={{ color: 'red' }}>{errors.username.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label style={styles.inputLabel}>Email address</label>
                <input type="email" className="form-control" {...register('email')} style={styles.input} />
                <div className="form-text">We'll never share your email with anyone else.</div>
                {errors.email && (
                  <small style={{ color: 'red' }}>{errors.email.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label style={styles.inputLabel}>Password</label>
                <input type="password" className="form-control" {...register('password')} style={styles.input} />
                {errors.password && (
                  <small style={{ color: 'red' }}>{errors.password.message}</small>
                )}
              </div>
              <button type="submit" className="btn btn-primary" style={styles.button} disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
          <div style={styles.haveAccountText}>
            Already have an account? <Link to="/login">Log in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
