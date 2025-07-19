import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PayslipForm = () => {
  const nav = useNavigate();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pay, setPay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const basicsal = parseFloat(pay);
    let bonus = basicsal <= 5000 ? basicsal * 0.05 : basicsal * 0.10;
    const total = basicsal + bonus;

    nav('/showpayslip', {
      state: {
        name,
        empId: id,
        basic: basicsal,
        bonus,
        total
      }
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2><center>PaySlip Calculator</center></h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <label>Id: </label>
        <input
          type="text"
          placeholder="enter your id"
          required
          onChange={(e) => setId(e.target.value)}
        />
        <br /><br />

        <label>Basic salary: </label>
        <input
          type="number"
          placeholder="enter your basic pay"
          required
          onChange={(e) => setPay(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PayslipForm;
