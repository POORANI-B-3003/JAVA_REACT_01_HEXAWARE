import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('currentUser');
    navigate('/signin');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate('/add')}>Add Book</button>
      <button onClick={() => navigate('/remove')}>Remove Book</button>
      <button onClick={() => navigate('/issue')}>Issue Book</button>
      <button onClick={() => navigate('/return')}>Return Book</button>
      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
