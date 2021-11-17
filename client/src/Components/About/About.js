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
                  RANKINGS: <span>1/10</span>
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
              <input
                type="submit"
                value="Edit Profile"
                className="profile-edit-btn"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WorK Link</p>
                <a href="#">Youtube</a><br />
                <a href="#">Facebook</a><br />
                <a href="#">Github</a><br />
                <a href="#">Linkden</a><br />
                <a href="#">Instagram</a><br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myContentTab">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>USER ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>87087060878</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Manoj Singh Rana</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Developer</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>University</label>
                    </div>
                    <div className="col-md-6">
                      <p>LPU</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Beginer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
