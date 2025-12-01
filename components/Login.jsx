import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter Email" /> <br /><br />
        <input type="password" placeholder="Enter Password" /> <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
