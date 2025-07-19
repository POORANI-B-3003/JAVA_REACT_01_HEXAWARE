import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nav = useNavigate(); //navigation hook

  const openSignin = () => {
    nav("/signin");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>
        <center>Contact Us</center>
      </h2>
      <p>Email: support@example.com</p>
      <p>Phone: +91-9876543210</p>

      <button onClick={openSignin}>Signin</button>
    </div>
  );
};

export default Contact;
