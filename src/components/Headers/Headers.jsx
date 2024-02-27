import React from 'react'
import logo from '../../assets/logo.png'
import './Headers.css'

function Headers() {
  return (
    <div className='headers'>
        <img src={logo} alt="logo" />
        <div className='buttons'>
            <p>EXIT</p>
        </div>
    </div>
  )
}

export default Headers