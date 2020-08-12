import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import PositionPage from './pages/position';

// import { fetchWeather } from './api/fetchWeather';
import './App.css';

function App() {
    // const [query, setQuery] = useState('');
    // const [weather, setWeather] = useState({});


    // const search = async (e) => {
    //     if (e.key === 'Enter') {
    //         const data = await fetchWeather(query)

    //         setWeather(data);
    //         setQuery('');
    //     }
    // }
    return (
        // <div className="main-container">
        //     {/* <input type="text" className="search" placeHolder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        //     {weather.main && (
        //         <div className="city">
        //             <h2 className="city-name">
        //                 <span>{weather.name}</span>
        //                 <sup>{weather.sys.country}</sup>
        //             </h2>
        //             <div className="city-temp">
        //                 {Math.round(weather.main.temp)}
        //                 <sup>&deg;C</sup>
        //             </div>
        //             <div className="info">
        //             <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
        //             <p>{weather.weather[0].description}</p>
        //             </div>
        //         </div>
        //     )} */}

        // </div>

        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/position" component={PositionPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;