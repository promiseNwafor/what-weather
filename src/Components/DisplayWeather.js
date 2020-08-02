import React from 'react';
import './DisplayWeather.css'
import Windy from '../images/windy.svg'

function DisplayWeather(props) {
  const { country, city, temp, humidity, description } = props;

  return (
    <div className="DisplayWeather">
      <h1>Result Display</h1>
      <img src={Windy} alt="windy"/>
      <div>
        <p>LOCATION:</p> 
        <p>{`${city}, ${country}`}</p>
      </div>
      <div>
        <p>CONDITION:</p> 
        <p>{description}</p>
      </div>
      <div>
        <p>TEMPERATURE:</p> 
        <p>{temp}</p>
      </div>
      <div>
        <p>HUMIDITY:</p> 
        <p>{humidity}</p>
      </div>
      <div className="resetShare">
        <button className="reset-btn">Reset</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
}

export default DisplayWeather;