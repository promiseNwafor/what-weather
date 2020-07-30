import React, { useState } from 'react';
import Home from './Components/Home';
import CheckWeather from './Components/CheckWeather';
import DisplayWeather from './Components/DisplayWeather';
import './App.css';

const apiKey = "ace89d82c6a482949426d56639c7e414";

function App() {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [description, setDescription] = useState('')
 

  const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`)
    .then(response => response.json())
    .then(res => {
      setCountry(res.sys.country)
      setCity(res.name)
      setTemp(res.main.temp)
      setHumidity(res.main.humidity)
      setDescription(res.weather[0].description)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    });
  }

  const handleInput = e => {
    e.target.name === "country" ? 
      setCountry(e.target.value)
    : setCity(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }


  return (
    <div className="App">
      <Home />
      <CheckWeather
        handleInput={handleInput} 
        handleSubmit={handleSubmit}  />
      <DisplayWeather
        country={country} 
        city={city} 
        temp={temp} 
        humidity={humidity} 
        description={description} />
    </div>
  );
}

export default App;
