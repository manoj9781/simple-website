import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
  const homePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
        setUserName(data.name);
        setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p> Welcome </p>
          <h2> {userName} </h2>
          <h2> {show ? "Happy, to see you Back" : "We Are the Mern Developer "} </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
