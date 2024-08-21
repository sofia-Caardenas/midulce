// Register.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const register = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Registrar usuario</h1>
        <div className="input-box">
          <label htmlFor="username">Nombre de usuario</label>
          <input id="username" type="text" placeholder="Usuario" required />
        </div>
        <div className="input-box">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="Correo electrónico" required />
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
          <Link to="/login">¿Ya tienes una cuenta?</Link>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default register;