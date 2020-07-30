import React from 'react';

function DisplayWeather(props) {
  const { country, city, temp, humidity, description } = props;

  return (
    <div className="DisplayWeather">
      <h1>Result Display</h1>
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
    </div>
  );
}

export default DisplayWeather;