// Login.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Iniciar sesión</h1>
        <div className="input-box">
          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" placeholder="Usuario" required />
        </div>
        <div className="input-box">
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" placeholder="Contraseña" required />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Guardar mis datos
          </label>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <Link to="/register">Registrarse</Link>
        <br />
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;