import React from 'react';
import './DisplayWeather.css'
import Windy from '../images/windy.svg'
import { Link } from "react-router-dom";

function DisplayWeather(props) {
  const { country, city, temp, humidity, description, handleReset } = props;
  const tem = temp ? (temp - 273).toFixed(2) : ""

  return (
    <div className="DisplayWeather">
      <h1 className="mb-2">Weather Now</h1>
      <img src={Windy} alt="windy"/>
      <div>
        <p className="mt-2">LOCATION:</p> 
        <p className="mt-2 p2">{`${city} ${country}`}</p>
      </div>
      <div>
        <p className="mt-2">CONDITION:</p> 
        <p className="mt-2 p2">{description}</p>
      </div>
      <div>
        <p className="mt-2">TEMPERATURE:</p>
        <p className="mt-2 p2">{tem}
          {temp ? <span><sup>o</sup>C</span> : ""}
        </p>
      </div>
      <div>
        <p className="mt-2">HUMIDITY:</p> 
        <p className="mt-2 p2">{humidity}</p>
      </div>
      <div className="resetShare">
        <button type="reset" className="" onClick={handleReset}>
          <Link to="/check">RESET</Link>
        </button>
      </div>
    </div>
  );
}

export default DisplayWeather;