import React from 'react';
import './login.css';
import signIn from '../../images/login.png';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signIn} alt="Pic" />
              </figure>
              <NavLink to="/signup" className="signup-image-link">
                <span className="image-link"> Create an Account</span>
              </NavLink>
            </div>
            <div className="signup-form">
              <h2 className="form-title">Sign In</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                  />
                </div>
                
               
                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock materials-icon-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                  />
                </div>
               
                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Sign In"
                    name="signup"
                    id="signup"
                    className="form-submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
