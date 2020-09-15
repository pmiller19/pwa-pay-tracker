import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './home-css/home.css'
import './main-css/main.css'

class Homepage extends Component {
  render () {
    return (
      <div className = "body">
        <div className='main-container'>
          <div className='choose-organization'>
            <h1>Pick Your Frat</h1>
          </div>
          <div className='frat-buttons'>
            <Link to='/login'>
              <button className='primary-button'>Beta Theta Pi</button>
            </Link>
            <Link to='/login'>
              <button className='primary-button'>Pi Kappa Alpha</button>
            </Link>
            {/* <Link to='/login'>
              <button className='primary-button'>Beta Theta Pi</button>
            </Link>
            <Link to='/login'>
              <button className='primary-button'>Pi Kappa Alpha</button>
            </Link> */}
          </div>
        </div>
      </div>
    )
  }
}

// maybe don't need the 'withRouter'
export default withRouter(Homepage)
