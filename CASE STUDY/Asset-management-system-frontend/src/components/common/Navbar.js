import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import '../../styles/NavbarUpdates.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState('');

  const handleOpenMenu = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType('');
  };

  const purple = '#6A0DAD';
  const hoverBg = '#f3e8ff';

  return (
    <Box sx={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <AppBar
        position="static"
        elevation={0}
        className="navbar-container"
        sx={{ backgroundColor: '#ffffff' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Brand Title */}
          <Typography
            variant="h5"
            className="navbar-title"
            onClick={() => navigate('/')}
            sx={{ color: purple, fontWeight: 700, cursor: 'pointer' }}
          >
            Asset Sphere
          </Typography>

          {/* Navigation Links */}
          <Box className="navbar-links" sx={{ display: 'flex', gap: 2 }}>
            {['Products', 'Solutions', 'Resources', 'Pricing'].map((label) => (
              <Button
                key={label}
                disableRipple
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => handleOpenMenu(e, label)}
                sx={{
                  color: purple,
                  textTransform: 'none',
                  fontWeight: 500,
                  '&:hover': { backgroundColor: hoverBg },
                }}
              >
                {label}
              </Button>
            ))}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Products'}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Asset Tracker</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Maintenance Manager</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Lifecycle Monitor</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Solutions'}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>IT Asset Management</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Facility Management</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Fleet Management</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Resources'}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Blog</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Case Studies</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Webinars</MenuItem>
            </Menu>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && menuType === 'Pricing'}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Plans</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Compare Features</MenuItem>
            </Menu>
          </Box>

          {/* Auth Buttons */}
          <Box className="navbar-buttons" sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              onClick={() => navigate('/login')}
              sx={{
                color: purple,
                borderColor: purple,
                textTransform: 'none',
                '&:hover': { backgroundColor: hoverBg, borderColor: purple },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              onClick={() => navigate('/register')}
              sx={{
                backgroundColor: purple,
                textTransform: 'none',
                '&:hover': { backgroundColor: '#5a0ca1' },
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
