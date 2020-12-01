import React, { useContext } from 'react';
import './header-css/header.css'
// how to add image if we want that
// import logo from '../assets/unl-logo.png';

function Header() {
    return (
        <div>
            {/* add image if we want that */}
            {/* <img src={logo} alt="Logo" className="w-10" /> */}
            <button className="add-button">Add Event</button>
        </div>
    );
}
export default Header;