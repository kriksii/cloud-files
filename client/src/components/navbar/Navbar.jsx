import React from 'react'
import Logo from '../../assets/navbar-logo.svg'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <img src={Logo} alt="" className="navbar__logo" />
        <div className="navbar__header">Cloud Files</div>
        <div className="navbar__login">Login</div>
        <div className="navbar__registration">Registration</div>
      </div>
    </div>
  )
}

export default Navbar