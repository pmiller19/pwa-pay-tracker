import React, { Component } from 'react'

import './main-css/main.css'

class LoginPage extends Component {
  constructor () {
    super()

    this.state = {
      history: {}
    }
  }

  render () {
    return (
      <div className='body'>
        <div className='main-section'>
          <h1>Please Enter Your Frat's Code</h1>
          <input type='number' className='search' placeHolder='Search...' />
        </div>
        <button className='primary-button'>Next</button>
      </div>
    )
  }
}

export default LoginPage
