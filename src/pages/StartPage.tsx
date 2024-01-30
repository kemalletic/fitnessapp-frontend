import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImg from '../assets/img/background.png';

const StartPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>Welcome to Fitness App</h1>
          <p style={styles.subtitle}>Discover a variety of workout types and get fit!</p>
          <p style={styles.quote}>
            "Your body can stand almost anything. It's your mind that you have to convince."
          </p>
          <div style={styles.actions}>
            <span style={styles.dontHaveAccountText}>
              Don't have an account? <Link to="/register">Sign up here</Link>
            </span>
            <Link to="/login" style={styles.buttonOutline}>
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
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
    marginTop: 'auto', // Push content to the middle
    marginBottom: 'auto', // Push content to the middle
  },
  title: {
    fontSize: '3rem',
    color: '#fff',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#fff',
    marginBottom: '40px',
  },
  quote: {
    fontSize: '1rem',
    color: '#fff',
    fontStyle: 'italic',
    marginBottom: '40px',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '2px solid #fff',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  dontHaveAccountText: {
    color: '#fff',
    marginTop: '10px',
    fontSize: '0.9rem',
  },
};

export default StartPage;
