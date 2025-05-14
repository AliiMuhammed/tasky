import React, { useState } from "react";
import "./style/login.css";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { validateLogin } from "../../../utils/validateLogin.js";
import { signInWithPopup, auth, provider } from "../../../firebase"; // adjust the path

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin({ email, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Stop if errors exist
    }

    // Proceed with login logic
    console.log("Logging in with:", { email, password });
  };
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Optionally store user data
    localStorage.setItem("user", JSON.stringify({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    }));

    alert("Logged in successfully as " + user.displayName);

    // TODO: redirect or update app state
  } catch (error) {
    console.error("Google login error", error);
    alert("Google login failed");
  }
};

  return (
    <section className="login-section">
      <div className="container">
        <div className="paper">
          <div className="login-form">
            <div className="header">
              <h1>Welcome back!</h1>
            </div>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="input-group">
                <div className="pass-show-btn">
                  <button
                    type="button"
                    className="showPass"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <button type="submit" className="main-btn login-btn">
                Login
              </button>
            </form>
            <div className="footer-text">
              <p className="google-login">
               <button type="button" onClick={handleGoogleLogin} className="google-login-btn">
    <FaGoogle className="google-icon" />
    Login with Google
  </button>
              </p>
              <p className="signup-text">
                Don't have an account?
                <Link to="/signup" className="signup-link">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
