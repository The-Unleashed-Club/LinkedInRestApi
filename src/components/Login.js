import React, { useState } from "react";
import {auth , signInWithEmailAndPassword } from '../firebase/firebase-utilities';
import "./login.scss";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [heading, setHeading] = useState("#224957");
  const [bg, setBg] = useState("#e5e5e5");
  const [text, setText] = useState("#093545");
  const [forget, setForget] = useState("#000000");

  const handleLogin = (e) => {
    e.preventDefault();
    

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          // test username and password are 
          // admin@admin.in
          // password  
          const user = userCredential.user;
          
          props.setShow(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });


  };

  
  const toggleButton = () => {
    if (darkTheme === true) {
      setHeading("#ffffff");
      setBg("#093545");
      setText("#ffffff");
      setForget("#20df7f");
      setDarkTheme(false);
    } else {
      setHeading("#224957");
      setBg("#e5e5e5");
      setText("#093545");
      setForget("#000000");
      setDarkTheme(true);
    }
  };

  return (
    <>
      {/* <button onClick={toggleButton}>Change</button> */}
      <div className="container" style={{ backgroundColor: bg }}>
        <div className="login-form">
          <h2 style={{ color: heading }}>Sign in</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input"
            />
            <div className="remember-forgot">
              <div className="remember-me" style={{ color: text }}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label>Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="/#" style={{ color: forget }}>
                  Forgot Password?
                </a>
              </div>
            </div>
            <button type="submit" className="login-btn" style={{ color: text }}>
              <label>Login</label>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
