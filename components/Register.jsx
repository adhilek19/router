import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login"); 
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Enter Name" /> <br /><br />
        <input type="email" placeholder="Enter Email" /> <br /><br />
        <input type="password" placeholder="Enter Password" /> <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
