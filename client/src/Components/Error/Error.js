import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found</h2>
          <p className="mb-5">
            The page you are looking might be removed or its name changed
            permanently
          </p>
          <NavLink to="/"> Back to Home Page </NavLink>
        </div>
      </div>
    </>
  );
}

export default Error;
