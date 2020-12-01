import React, { useState }  from 'react'
import './main-css/main.css'
import { Link } from 'react-router-dom';
import Header from '../pages/header'

function LoginPage() {
    const [password, setPassword] = useState('');
    let [click, setClick] = useState(false);

    if (password === '6969' && click === true) {
        return (
            <div className="mt-4 px-4">
              <Header />
                
            </div>
        );
    } else if (password !== '6969' && click === true) {
      setClick(false);
    } else {
        return (
          <div className='body'>
            <div className='main-section'>
              <h1>Please Enter Your Frat's Code</h1>
              <input
                className="search"
                placeholder="Code..."
                type="number"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button className='primary-button' onClick={e => setClick(true)}>Next</button>
          </div>
        )
    }
          
}

export default LoginPage;