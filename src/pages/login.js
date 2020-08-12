import React, { Component } from 'react';

import './login.css';

class LoginPage extends Component {
    constructor() {
        super();

        this.state = {
            history: {},
        }
    }
    
    render() {
        return (
            <div className="main-container">
                <div className="title">
                    <h1>Please Enter Your Frat's Code</h1>
                </div>
                
                <input type="text" className="search" placeHolder="Search..."  />


                
            </div>
        );
    }
}

export default LoginPage;