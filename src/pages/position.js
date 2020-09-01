import React, { Component } from 'react';

import './login-css/login.css';

class PositionPage extends Component {
    constructor() {
        super();

        this.state = {
            history: {},
        }
    }
    
    render() {
        return (
            <div className="main-container">
                <div className="choose-position">
                    <h1>Are You an Admin or Attendee?</h1>
                </div>
            </div>
        );
    }
}

export default PositionPage;