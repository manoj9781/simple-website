import React,{useState} from 'react';
import './signup.css';
import signUp from '../../images/signup.jpg';
import { NavLink } from 'react-router-dom';

function Signup() {

  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    confirm_password: '',
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

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
                    <i className="zmdi zmdi-account materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                  />
                </div>
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
                    value={user.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your Phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i className="zmdi zmdi-slideshow materials-icon-name"></i>
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    placeholder="Enter your Passion"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInputs}
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
                    value={user.password}
                    onChange={handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm_password">
                    <i className="zmdi zmdi-lock materials-icon-name"></i>
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Enter your Confirm Password"
                    autoComplete="off"
                    value={user.confirm_password}
                    onChange={handleInputs}
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
               <span className="image-link"> I am already register</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
