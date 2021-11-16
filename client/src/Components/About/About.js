import React from 'react';
import userImage from '../../images/upload.jpg';
import './About.css';

function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4 ">
              <img className="user-image" src={userImage} alt="UserPic" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Manoj Singh</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>{' '}
                </p>
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#home"
                      className="nav-link active"
                      id="home-tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#profile"
                      className="nav-link active"
                      id="profile-tab"
                      role="tab"
                      data-toggle="tab"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
                      </div>
                      <div className="col-md-2">
                          <input type="submit" value="Edit Profile" className="profile-edit-btn" name="btnAddMore" />
                      </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
