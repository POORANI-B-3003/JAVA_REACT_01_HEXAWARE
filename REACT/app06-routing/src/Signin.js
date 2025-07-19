import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = (e) => {
    e.preventDefault();

    // ✅ Fetch user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};

    // ✅ Check credentials
    if (email === storedUser.email && password === storedUser.password) {
      alert(`Welcome, ${storedUser.username}!`);
      onLogin?.(storedUser.username); // optional callback
      setError('');

      // ✅ Pass data to Welcome page
      navigate('/welcome', { state: { Id: storedUser.username, Password: password } });
    } else {
      setError('Invalid email or password');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignin}>
        <h2>Sign In</h2>

        {error && <div className="error">{error}</div>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p style={{ marginTop: '10px' }}>
          Don't have an account?{' '}
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={goToSignup}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
