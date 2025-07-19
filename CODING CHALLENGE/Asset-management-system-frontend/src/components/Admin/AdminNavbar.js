import React from 'react';
import '../../styles/EmployeeNavbar.css';
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const admin = JSON.parse(localStorage.getItem('loggedInUser')) || {
    name: 'Admin',
    email: 'admin@example.com',
  };

  const nav = useNavigate();

  const handleNavigate = () => {
    nav('/');
  };

  const handleProfile = () => {
    nav('/admin/profile');
  };

  return (
    <nav className="employee-navbar purple-theme-navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <h2 className="logo" onClick={handleNavigate}>Asset Sphere</h2>
      </div>

      {/* Right: Notification + Avatar */}
      <div className="navbar-right">
        <NotificationsNoneIcon
          className="notification-icon"
          style={{ fontSize: 24, cursor: 'pointer', color: '#6a0dad' }}
        />

        <div className="avatar-container">
          <Avatar
            sx={{
              bgcolor: '#6a0dad', // purple
              width: 36,
              height: 36,
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
            onClick={handleProfile}
          >
            {admin.name?.charAt(0)?.toUpperCase() || 'E'}
          </Avatar>
          <span className="employee-name">{admin.name}</span>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
