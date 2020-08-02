import React from 'react';

function CheckWeather(props) {
  const { handleInput, handleSubmit } = props;
  return (
    <div className="CheckWeather">
      <div className="input-group-prepend">
        <span className="input-group-text">Enter City and Country</span>
      </div>
      <input type="text" aria-label="First name" className="form-control"
        name="city" onChange={handleInput} 
        placeholder="City" />
      <input type="text" aria-label="Last name" className="form-control"
        name="country" onChange={handleInput} 
        placeholder="Country" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2"
            onClick={handleSubmit}>Check Weather</button>
        </div>
    </div>
  );
}

export default CheckWeather;   