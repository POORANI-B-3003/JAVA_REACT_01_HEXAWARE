import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <h2><center>Welcome to the Home Page</center></h2>
      <p><center>This is the landing page of your application.</center></p>
      <center><button onClick={() => navigate('/payslipform')}>Payslip</button></center>
    </div>
  );
};

export default Home;
