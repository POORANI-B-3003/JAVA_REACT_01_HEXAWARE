import { useState } from "react";

const Login = () => {
  // States to store user input
  let [Id, setId] = useState();
  let [Pswd, setPswd] = useState();
  let [newPswd, setNewPswd] = useState();

  // Handlers to update state
  const handleId = (e) => setId(e.target.value);
  const handlePswd = (e) => setPswd(e.target.value);
  const handleNewPswd = (e) => setNewPswd(e.target.value);

  // Sign Up function - saves credentials in localStorage
  const SignUp = () => {
    if (Id && Pswd) {
      localStorage.setItem(Id, Pswd);
      alert("Sign Up successful");
    } else {
      alert("Please enter ID and Password");
    }
  };

  // Sign In function - checks credentials
  const SignIn = () => {
    let stored = localStorage.getItem(Id);
    if (stored === Pswd) {
      alert("Welcome");
    } else {
      alert("Invalid credentials");
    }
  };

  // Password update function - validates old password first
  const updatePswd = () => {
    let stored = localStorage.getItem(Id);
    if (stored === Pswd) {
      localStorage.setItem(Id, newPswd);
      alert("Password updated successfully");
    } else {
      alert("Old password is incorrect");
    }
  };

  return (
    <>
      <div className="cont">
        <h2>Login / Sign Up</h2>

        <input type="text" placeholder="Enter ID" onChange={handleId} />
        <input type="password" placeholder="Enter Password" onChange={handlePswd} />
        <input type="password" placeholder="Enter New Password (if updating)" onChange={handleNewPswd} />

        <br />

        <button onClick={SignUp}>Sign Up</button>
        <button onClick={SignIn}>Sign In</button>
        <button onClick={updatePswd}>Forgot Password / Update</button>
      </div>
    </>
  );
};

export default Login;
