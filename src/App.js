import React from 'react';
import Home from './Components/Home';
import CheckWeather from './Components/CheckWeather';
import DisplayWeather from './Components/DisplayWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <CheckWeather />
      <DisplayWeather />
    </div>
  );
}

export default App;
