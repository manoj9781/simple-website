import React from 'react';
import userImage from '../../images/upload.jpg';
import './About.css';

function About() {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img className="user-image" src={userImage} alt="UserImage" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Manoj Singh Rana</h5>
                <h6>Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>

                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home">
                     About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#profile">
                      Timeline
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
                <p>Work Links</p>
                <a href="https://www.codechef.com/users/manoj_singh">
                  CodeChef
                </a>
                <br />
                <a href="https://www.instagram.com/r_a_n_a_03/">
                  Instagram
                </a>{' '}
                <br />
                <a href="https://www.instagram.com/r_a_n_a_03/">Youtube</a>{' '}
                <br />
                <a href="https://www.instagram.com/r_a_n_a_03/">
                  Facebook
                </a>{' '}
                <br />
                <a href="https://www.instagram.com/r_a_n_a_03/">Linkden</a>{' '}
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane show active fade"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>57632819</p>
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
                      <label>Specialization</label>
                    </div>
                    <div className="col-md-6">
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>University</label>
                    </div>
                    <div className="col-md-6">
                      <p>Lovely Professional University</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Beginer</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>07</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Language Knowledge</label>
                    </div>
                    <div className="col-md-6">
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>React Js</label>
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
