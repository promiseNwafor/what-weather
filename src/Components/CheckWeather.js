import React from 'react';

function CheckWeather(props) {
  const { handleInput, handleSubmit } = props;
  return (
    <div className="CheckWeather">
      <h2 className="input-group-text center">CHECK WEATHER</h2>
      <div class="form-wrap">
        <div class="form">
          <p>Country</p>
          <input type="text" aria-label="Last name" className="form-control block"
            name="country" onChange={handleInput} 
            placeholder="Enter Country" />
        </div>
        <div class="form">
          <p>City</p>
          <input type="text" aria-label="First name" className="form-control block"
            name="city" onChange={handleInput} 
            placeholder="Enter City" />
        </div>
        <button class="btn" type="button" id="button-addon2"
          onClick={handleSubmit}>QUICK CHECK</button>
      </div>
    </div>
  );
}

export default CheckWeather;   