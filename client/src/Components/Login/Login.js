import React, { useState } from 'react';
import './login.css';
import signIn from '../../images/login.png';
import { NavLink, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  const userLogin = async (event) => {
    event.preventDefault();

    const res = await fetch('/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert('Invalid');
    } else {
      window.alert('seccesful');
      navigation('/');
    }
  };

  return (
    <>
      <section className="signin">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={signIn} alt="Pic" />
              </figure>
              <NavLink to="/signup" className="signin-image-link">
                <span className="image-link"> Create an Account</span>
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form method="post" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock materials-icon-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your Password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    value="Sign In"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    onClick={userLogin}
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
