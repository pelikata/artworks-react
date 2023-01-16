import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Logo from "../img/logo.png"

function NavBar() {
  return (
    <div className="navBar">
      <div className='logo'><img src={Logo} alt="logo"></img></div>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        </nav>
    </div>
  )
}

export default NavBar