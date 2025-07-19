import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Faq from './Faq';
import Signin from './Signin';
import Welcome from './Welcome';
import Signup from './Signup';
import PayslipForm from './PayslipForm';
import ShowpaySlip from './ShowpaySlip';
import UCard from './UCard'; // ✅ Import UCard
import './App.css';

const App = () => {
  // ✅ User list for UCard rendering
  const [users] = useState([
    { UserId: '101', Name: 'Asha', Salary: 20000 },
    { UserId: '102', Name: 'Ajay', Salary: 30000 },
    { UserId: '103', Name: 'Jatin', Salary: 25000 },
    { UserId: '104', Name: 'Komal', Salary: 27000 }
  ]);

  return (
    <>
      <div className="nav-bar">
        <table align="center" style={{ marginBottom: "20px" }}>
          <tbody>
            <tr>
              <td><Link to="/">Home</Link></td>
              <td><Link to="/contact">Contact</Link></td>
              <td><Link to="/faq">FAQ</Link></td>
              <td><Link to="/signin">Sign In</Link></td>
              <td><Link to="/signup">Sign Up</Link></td>
              <td><Link to="/payslipform">Payslip</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      

      {/* 🔁 Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/payslipform" element={<PayslipForm />} />
        <Route path="/showpayslip" element={<ShowpaySlip />} />
      </Routes>

      {/* 👤 User Cards with Links */}
      <div style={{ marginTop: "20px" }}>
        {users.map((temp) => (
          <Link
            key={temp.UserId}
            to={`/ucard/${temp.UserId}/${temp.Name}/${temp.Salary}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <UCard UserId={temp.UserId} Name={temp.Name} Salary={temp.Salary} />
          </Link>
        ))}
      </div>



    </>
  );
};

export default App;
