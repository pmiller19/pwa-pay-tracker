import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class Homepage extends Component{
    render() {
        return (
            <div>
                <div className="choose-organization">
                    <h1>Pick Your Frat</h1>
                </div>
                <Link to="/pages/frat-homepage"><button className="home-button">Beta Theta Pi</button></Link>
                <Link to="/pages/frat-homepage"><button className="home-button">Pi Kappa Alpha</button></Link>
                
            </div>
        );
    }
}

export default Homepage;