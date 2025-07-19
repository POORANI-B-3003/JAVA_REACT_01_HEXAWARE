import React from 'react';
import '../../styles/SummaryCard.css';

const SummaryCard = ({ title, count, color }) => {
  return (
    <div
      className="summary-card"
      style={{
        background: color || '#7c3aed',
        color: '#fff',
        flex: 1,
        minWidth: '220px',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px' }}>{title}</div>
      <div style={{ fontSize: '28px', fontWeight: '700' }}>{count ?? 0}</div>
    </div>
  );
};

export default SummaryCard;
