import React from 'react';
import { Link } from "react-router-dom";

function CheckWeather(props) {
  const { handleInput, handleSubmit } = props;
  return (
    <div className="CheckWeather">
      <h2 className="input-group-text center">CHECK WEATHER</h2>
      <div className="form-wrap">
        <div className="form">
          <p>Country</p>
          <input type="text" aria-label="Last name" className="form-control block"
            name="country" onChange={handleInput} 
            placeholder="Enter Country" />
        </div>
        <div className="form">
          <p>City</p>
          <input type="text" aria-label="First name" className="form-control block"
            name="city" onChange={handleInput} 
            placeholder="Enter City" />
        </div>
        <button className="btn" type="button" id="button-addon2"
          onClick={handleSubmit}>
          <Link to="/display">QUICK CHECK</Link>
        </button>
        <button className="btn">
          <Link to="/">HOME</Link>
        </button>
      </div>
    </div>
  );
}

export default CheckWeather;   