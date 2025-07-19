import React from 'react';
import { useLocation } from 'react-router-dom';

const ShowpaySlip = () => {
  const { state } = useLocation();
  const { name, empId, basic, bonus, total } = state || {};

  return (
    <div style={{ padding: '20px' }}>
      <h2>Employee Payslip</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Employee ID:</strong> {empId}</p>
      <p><strong>Basic Salary:</strong> ₹{basic}</p>
      <p><strong>Bonus:</strong> ₹{bonus}</p>
      <p><strong>Total Salary:</strong> ₹{total}</p>
    </div>
  );
};

export default ShowpaySlip;
