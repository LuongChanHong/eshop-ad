import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../../App.css";
import "./login.css";

import { signInAction } from "../../Redux/Actions/userAction";

const Login = () => {
  const emailText = "Please check your email";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);

  const passwordText = "Please check your password";
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const inputValidation = () => {
    if (email) {
      setEmailError(false);
      if (validateEmail(email)) {
        setEmailRegex(false);
        if (password) {
          setPasswordError(false);
          return true;
        } else {
          setPasswordError(true);
          return false;
        }
      } else {
        setEmailRegex(true);
        return false;
      }
    } else {
      setEmailError(true);
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
        console.log(res);
        if (res.msg) {
          if (res.msg.includes("Email")) {
            setEmailError(true);
          }
          if (res.msg.includes("Password")) {
            setPasswordError(true);
          }
        } else {
          navigate("/");
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
              {/* {isLoginError && <span className="text-danger">{errorText}</span>} */}
              {(emailError || emailRegex) && (
                <span className="text-danger">{emailText}</span>
              )}

              {passwordError && (
                <span className="text-danger">{passwordText}</span>
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
