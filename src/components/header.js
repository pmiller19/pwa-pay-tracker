import React, { useContext } from 'react';
import './header-css/header.css';
import { Link } from 'react-router-dom';
// how to add image if we want that
// import logo from '../assets/unl-logo.png';

function Header() {
    return (
        <div>
            {/* add image if we want that */}
            {/* <img src={logo} alt="Logo" className="w-10" /> */}
            <button 
            className="add-button" 
            type="button"
            onClick={(e) => {
                window.location.href='https://docs.google.com/forms/u/0/'
            }}
            >Add Event</button>
            
        </div>
    );
}
export default Header;