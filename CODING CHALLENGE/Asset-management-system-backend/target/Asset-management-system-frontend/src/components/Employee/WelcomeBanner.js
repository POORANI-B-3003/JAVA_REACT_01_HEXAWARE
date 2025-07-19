import React from 'react';

const WelcomeBanner = ({ name = "Employee" }) => {
  return (
    <div
      className="welcome-banner"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#ede9fe',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Image */}
      <div className="banner-left" style={{ flex: '0 0 100px' }}>
        <img
          src="/hello.svg"
          alt="Welcome"
          className="banner-img"
          style={{ width: '100%', maxWidth: '100px' }}
        />
      </div>

      {/* Center Text */}
      <div
        className="banner-center"
        style={{
          flex: '1',
          paddingLeft: '20px',
          minWidth: '220px',
        }}
      >
        <p
          className="dashboard-label"
          style={{
            color: '#6b21a8',
            marginBottom: '5px',
            fontWeight: '600',
            fontSize: '14px',
          }}
        >
          Employee Dashboard
        </p>
        <h2 style={{ color: '#4c1d95', margin: '6px 0' }}>Hi, {name}</h2>
        <p
          className="welcome-msg"
          style={{ color: '#5b21b6', fontSize: '15px', lineHeight: '1.5' }}
        >
          Welcome to <strong>Asset Sphere</strong> 👋<br />
          Your activity will be updated here. Use this system to get and manage
          the assets at your convenience.
        </p>
      </div>

      {/* Right Events Box */}
      <div
        className="banner-right"
        style={{ flex: '0 0 220px', marginTop: '20px' }}
      >
        <div
          className="event-box"
          style={{
            background: '#d8b4fe',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <p
            className="event-title"
            style={{ color: '#4c1d95', fontWeight: '600', marginBottom: '6px' }}
          >
            Events
          </p>
          <div
            className="event-card"
            style={{
              background: '#f3e8ff',
              padding: '10px',
              borderRadius: '8px',
              marginBottom: '8px',
            }}
          >
            <p
              className="event-name"
              style={{ fontWeight: '500', marginBottom: '4px' }}
            >
              📞 Vani Call
            </p>
            <p
              className="event-time"
              style={{ fontSize: '14px', color: '#4c1d95' }}
            >
              2:30 PM, Today
            </p>
          </div>
          <a
            href="/"
            className="view-all-link"
            style={{
              marginTop: '6px',
              display: 'block',
              color: '#7e22ce',
              textDecoration: 'underline',
              fontSize: '14px',
            }}
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
