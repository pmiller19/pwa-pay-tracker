import React, { useContext } from 'react';
import './body-css/body.css'
// how to add image if we want that
// import logo from '../assets/unl-logo.png';

function Body() {
    return (
        <div>
            {/* add image if we want that */}
            {/* <img src={logo} alt="Logo" className="w-10" /> */}
            <div className="card">
                <p>Poop</p>
            </div>
        </div>
    );
}
export default Body;