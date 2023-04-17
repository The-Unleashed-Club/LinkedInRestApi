import React, { useState } from "react";
import "./login.scss";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  
    
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };


  return (
    <div className="container">
      <div className="login-form">
        <h2>Sign in</h2>
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
            <div className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label>Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="/#">Forgot Password?</a>
            </div>
          </div>
          <button type="submit" className="login-btn">
            <label>Login</label>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
