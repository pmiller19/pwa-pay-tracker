import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from "./pages/home";
import FratHomePage from "./pages/frat-homepage";

// import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
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

        // <div className="App">
        //     <Router>
        //         <Switch>
        //             <Route exact path="/" render={props => <HomePage {...props} />} />
        //             {/* <Route path="/record" render={props => <RecordPage {...props} />} />
        //             <Route path="/view" render={props => <ViewPage {...props} />} />
        //             <Route path="/manage" render={props => <ManagePage {...props} />} /> */}
        //         </Switch>
        //     </Router>
        // </div>

        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/frat-homepage" component={FratHomePage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;