import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import "./login.css";

import { signInAction } from "../../Redux/Actions/userAction";

const Login = () => {
  const errorWarning = {
    email: "Please check your email",
    password: "Please check your password",
    role: "Admin and consultant only",
  };
  const [email, setEmail] = useState("");
  const [emailWarn, setEmailWarn] = useState(false);
  const [regexWarn, setRegexWarn] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordWarn, setPasswordWarn] = useState(false);

  const [roleWarn, setRoleWarn] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const inputValidation = () => {
    if (email) {
      setEmailWarn(false);
      if (validateEmail(email)) {
        setRegexWarn(false);
        if (password) {
          setPasswordWarn(false);
          return true;
        } else {
          setPasswordWarn(true);
          return false;
        }
      } else {
        setRegexWarn(true);
        return false;
      }
    } else {
      setEmailWarn(true);
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isInputValid = inputValidation();
    if (isInputValid) {
      const response = dispatch(
        signInAction({ email: email, password: password })
      );
      response.then((res) => {
        // console.log(res);
        if (res.role === "admin" || res.role === "consultant") {
          setRoleWarn(false);
          if (res.msg) {
            if (res.msg.includes("Email")) {
              setEmailWarn(true);
            }
            if (res.msg.includes("Password")) {
              setPasswordWarn(true);
            }
          } else {
            navigate("/");
          }
        } else {
          setRoleWarn(true);
        }
      });
    }
  };

  return (
    <section>
      <section className="login__body">
        <div className="card">
          <div className="d-flex flex-column card-body p-4">
            <h1 className="text-center login__title">Login</h1>
            <form className="d-grid gap-3">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                name="password"
                type="password"
                placeholder="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {roleWarn && (
                <span className="text-danger">{errorWarning.role}</span>
              )}
              {(emailWarn || regexWarn) && (
                <span className="text-danger">{errorWarning.email}</span>
              )}

              {passwordWarn && (
                <span className="text-danger">{errorWarning.password}</span>
              )}

              <button
                onClick={handleSubmit}
                type="button"
                className="rounded login__button"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
