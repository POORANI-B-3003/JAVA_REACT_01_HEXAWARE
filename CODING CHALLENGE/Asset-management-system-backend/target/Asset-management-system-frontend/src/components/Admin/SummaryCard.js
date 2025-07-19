import React from 'react';

const SummaryCard = ({ title, count, color = "#7e22ce" }) => {
  return (
    <div
      className="summary-card"
      style={{
        background: `linear-gradient(135deg, ${color}, #a855f7)`,
        color: "white",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        flex: "1 1 220px",
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px" }}>{title}</div>
      <div style={{ fontSize: "32px", fontWeight: "bold" }}>{count !== 0 ? count : 0}</div>
    </div>
  );
};

export default SummaryCard;
