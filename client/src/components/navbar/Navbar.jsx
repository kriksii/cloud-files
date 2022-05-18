import React from 'react'
import Logo from '../../assets/navbar-logo.svg'
import { NavLink } from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <img src={Logo} alt="" className="navbar__logo" />
        <div className="navbar__header">Cloud Files</div>
        <div className="navbar__login"><NavLink to="login">Login</NavLink></div>
        <div className="navbar__registration"><NavLink to="registration">Registration</NavLink></div>
      </div>
    </div>
  )
}

export default Navbar