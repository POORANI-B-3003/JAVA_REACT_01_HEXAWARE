import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [error, setError]       = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful!');

    // reset form
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirm('');
    setError('');
    navigate('/signin');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        {error && <div className="error">{error}</div>}

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p style={{ marginTop: '10px' }}>
          Already have an account?{' '}
          <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signin')}>
            Sign in
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
