import React, { useState } from 'react';
import Home from './Components/Home';
import CheckWeather from './Components/CheckWeather';
import DisplayWeather from './Components/DisplayWeather';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
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

  const handleReset = () => {
    setCountry('')
    setCity('')
    setTemp('')
    setDescription('')
    setHumidity('')
  }


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/check">
            <CheckWeather
            handleInput={handleInput} 
            handleSubmit={handleSubmit} />
          </Route>
          <Route path="/display">
            <DisplayWeather
            country={country} 
            city={city} 
            temp={temp} 
            humidity={humidity} 
            description={description}
            handleReset={handleReset} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Home />
        <CheckWeather
          handleInput={handleInput} 
          handleSubmit={handleSubmit} />
        <DisplayWeather
          country={country} 
          city={city} 
          temp={temp} 
          humidity={humidity} 
          description={description}
          handleReset={handleReset} /> */}
      </div>
    </Router>
  );
}

export default App;
