import React, { useEffect, useState } from 'react';
import API from '../../services/api';
import DateBanner from './DateBanner';
import WelcomeBanner from './WelcomeBanner';
import SummaryCard from './SummaryCard';
import AssignedAssetsTable from './AssignedAssetsTable';

const Dashboard = () => {
  const employee = JSON.parse(localStorage.getItem('loggedInUser')) || {
    name: 'Employee',
    email: 'employee@example.com',
    id: 0,
  };

  const [stats, setStats] = useState({
    myAssets: 0,
    pendingRequests: 0,
    totalRequests: 0,
  });

  const [assets, setAssets] = useState([]);

  useEffect(() => {
    if (!employee.id) return;

    API.get(`/dashboard/stats/${employee.id}`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error('Stats error:', err));

    API.get(`/assets/assigned/${employee.id}`)
      .then((res) => setAssets(res.data))
      .catch((err) => console.error('Asset error:', err));
  }, [employee.id]);

  return (
    <div style={{ backgroundColor: '#f5f3ff', minHeight: '100vh', padding: '20px' }}>
      <DateBanner />
      <WelcomeBanner name={employee.name} />

      <div
        className="summary-cards"
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '30px',
          flexWrap: 'wrap',
        }}
      >
        <SummaryCard
          title="My Assets"
          count={stats.myAssets}
          color="linear-gradient(to right, #7c3aed, #8b5cf6)"
        />
        <SummaryCard
          title="Pending Requests"
          count={stats.pendingRequests}
          color="linear-gradient(to right, #8b5cf6, #a78bfa)"
        />
        <SummaryCard
          title="Total Requests"
          count={stats.totalRequests}
          color="linear-gradient(to right, #a78bfa, #c4b5fd)"
        />
      </div>

      <div style={{ marginTop: '30px' }}>
        <AssignedAssetsTable assets={assets} />
      </div>
    </div>
  );
};

export default Dashboard;
