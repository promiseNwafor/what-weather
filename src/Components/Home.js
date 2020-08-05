import React from 'react';
import logo from '../images/logo.png'
import illustration from '../images/illustration.png'
import { Link } from "react-router-dom";


function Home() {

  return (
    <div className="Home">
      <div className="wrap1">
        <div className="image">
          <img src={logo} alt="logo" width="300px" height="auto" />
          <img src={illustration} alt="logo" width="300px" height="auto" />
        </div>
      </div>
      <div className="wrap">
        <h3>Anywhere<span className="orange">. </span> 
          Anytime<span className="orange">. </span>
          Anyday<span className="orange">. </span>
        </h3>
        <p>
          Check weather conditions, temperature<br /> and humidity in different locations<br />
          regardless of your current location.
        </p>
        <button>
          <Link to="/check">GET STARTED</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;