import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateBanner = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', background: '#ede9fe', padding: '10px 20px', borderRadius: '8px', color: '#6b21a8', fontWeight: '600' }}>
      <CalendarMonthIcon style={{ marginRight: '10px', color: '#7e22ce' }} />
      <span>{formattedDate}</span>
    </div>
  );
};

export default DateBanner;
