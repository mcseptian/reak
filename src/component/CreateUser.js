import React from "react";
import { Link } from "react-router-dom";

const Register = ({ history, registerUser = f => f }) => {
  let _email, _password, _name;

  const handleLogin = e => {
    e.preventDefault();

    registerUser(_name.value, _email.value, _password.value);
  };
  return (
    <div id="main">
      <form id="login-form" action="" onSubmit={handleLogin} method="post">
        <h3 style={{ padding: 15 }}>Register Form</h3>
        <input ref={input => (_name = input)} style={{}} autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="Name" />
        <input ref={input => (_email = input)} style={{}} autoComplete="off" id="email-input" name="email" type="text" className="center-block" placeholder="email" />
        <input ref={input => (_password = input)} style={{}} autoComplete="off" id="password-input" name="password" type="password" className="center-block" placeholder="password" />
        <button type="submit" style={{}} className="landing-page-btn center-block text-center" id="login-button">
          Register
        </button>
      </form>
        <Link style={{}} to="/login">
          Login
        </Link>
    </div>
  );
};

export default Register;
