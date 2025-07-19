import React from 'react';

const WelcomeBanner = ({ name = "Admin" }) => {
  return (
    <div className="welcome-banner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ede9fe', padding: '20px', borderRadius: '12px' }}>
      <div className="banner-left">
        <img src="/hello.svg" alt="Welcome" className="banner-img" style={{ width: '100px' }} />
      </div>

      <div className="banner-center" style={{ flex: 1, paddingLeft: '20px' }}>
        <p className="dashboard-label" style={{ color: '#6b21a8', marginBottom: '5px', fontWeight: '600' }}>Admin Dashboard</p>
        <h2 style={{ color: '#4c1d95' }}>Hi, {name}</h2>
        <p className="welcome-msg" style={{ color: '#5b21b6' }}>
          Welcome to <strong>Asset Sphere</strong> 👋<br />
          Your activity will be updated here. Use this system to get and manage the assets at your convenience.
        </p>
      </div>

      <div className="banner-right">
        <div className="event-box" style={{ background: '#d8b4fe', padding: '15px', borderRadius: '10px' }}>
          <p className="event-title" style={{ color: '#4c1d95', fontWeight: '600' }}>Events</p>
          <div className="event-card" style={{ background: '#f3e8ff', padding: '10px', borderRadius: '8px', marginTop: '8px' }}>
            <p className="event-name" style={{ fontWeight: '500' }}>📞 Vani Call</p>
            <p className="event-time" style={{ fontSize: '14px' }}>2:30 PM, Today</p>
          </div>
          <a href="/" className="view-all-link" style={{ marginTop: '10px', display: 'block', color: '#7e22ce', textDecoration: 'underline', fontSize: '14px' }}>View All</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
