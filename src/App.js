import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(query)

            setWeather(data);
            setQuery('');
        }
    }
    return (
        <div className="main-container">
            {/* <input type="text" className="search" placeHolder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )} */}

            {/* baseball code
            <div className='home page'>
                <Toolbar />
                <div id="home-button_group">
                    <Link to="/record"><button className="home-button">Record Stats</button></Link>
                    <Link to="/view"><button className="home-button">View Stats</button></Link>
                    <Link to="/manage"><button className="home-button">Manage Players</button></Link>
                </div>
                <p id="managers-shoutout">Powered by the Managers</p>
            </div> */}

            <div className="choose_organization">
                <h1>Which Organization Are You In?</h1>
            </div>
            <div className="frat-button">
                <h2>Beta Theta Pi</h2>
            </div>
            <div className="frat-button">
                <h2>Pi Kappa Alpha</h2>
            </div>
        </div>
    );
}

export default App;