import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './home.css';

class Homepage extends Component{
    render() {
        return (
            <div className="main-container">
                <div className="choose-organization">
                    <h1>Pick Your Frat</h1>
                </div>
                
                <Link to="/login"><button className="home-button">Beta Theta Pi</button></Link>
                <Link to="/login"><button className="home-button">Pi Kappa Alpha</button></Link>

                
                
                
            </div>
        );
    }
}

// maybe don't need the 'withRouter'
export default withRouter(Homepage);