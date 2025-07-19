import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  MenuItem,
  Alert,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../common/Navbar';
import API from '../../services/api';
import '../../styles/Login.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [remember, setRemember] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setEmailError(false);

    if (role === 'ADMIN' && !username.toLowerCase().includes('admin')) {
      setEmailError(true);
      return;
    }

    try {
      const res = await API.post('/auth/login', { username, password });
      const { token, role: userRole } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', userRole);

      const userRes = await API.get('/auth/me');
      localStorage.setItem('loggedInUser', JSON.stringify(userRes.data));

      navigate(
        userRole.toLowerCase() === 'admin'
          ? '/admin/dashboard'
          : '/employee/dashboard'
      );
    } catch (err) {
      setErrorMsg(err.response?.data || 'Login failed. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <Box className="login-container">
        <Box className="login-wrapper">
          {/* Left side image */}
          <Box className="login-image-section">
            <img
              src="/login.svg"
              alt="login"
              className="login-image"
            />
          </Box>

          {/* Right side form */}
          <Box className="login-form">
            <Typography className="purple-text">Welcome Back</Typography>
            <Typography variant="body2" className="subheading">
              Login to your account
            </Typography>

            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            {emailError && (
              <Alert severity="error">Admin email must contain "admin"</Alert>
            )}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                error={emailError}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <TextField
                select
                fullWidth
                label="Select Role"
                margin="normal"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setEmailError(false);
                }}
                required
              >
                <MenuItem value="ADMIN">Admin</MenuItem>
                <MenuItem value="EMPLOYEE">Employee</MenuItem>
              </TextField>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                }
                label="Keep me logged in"
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="login-btn"
                disabled={!username || !password || !role}
              >
                Sign in
              </Button>

              <Box className="or-divider">or</Box>

              <Button
                variant="outlined"
                fullWidth
                startIcon={
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                    alt="google"
                    width={18}
                  />
                }
              >
                Sign in with Google
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Need an account?{' '}
                <span
                  className="purple-link"
                  onClick={() => navigate('/register')}
                >
                  Create one
                </span>
              </Typography>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
