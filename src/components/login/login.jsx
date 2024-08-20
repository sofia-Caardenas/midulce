import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" required />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
