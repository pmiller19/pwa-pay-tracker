import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './frat-homepage.css'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Powered by the Managers</h1>
                <div className="frat-button">
                    <h2>Pi Kappa Alpha</h2>
                </div>
            </div>
        );
    }
}

export default HomePage;