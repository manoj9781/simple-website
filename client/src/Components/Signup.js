import React from 'react';
import './signup.css';
import signUp from '../images/signup.jpg';
import { NavLink } from 'react-router-dom';

function Signup() {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign Up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Register"
                    name="signup"
                    id="signup"
                    className="form-submit"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signUp} alt="Pic" />
              </figure>
              <NavLink to="/login" className="signup-image-link">
                I am already register
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
