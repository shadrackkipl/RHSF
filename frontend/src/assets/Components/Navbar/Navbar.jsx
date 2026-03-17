import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'


const Navbar = () => {
  return (
    <header className='header'>
      <img src={logo} alt="RHSF Logo" className='logo' />
      <nav className='navbar'>
        <a href="#">Home</a>
        <a href="#">Insitutions</a>
        <a href="#">Map</a>
        <a href="#">Livestream</a>
        <a href="#">Radio</a>
        <a href="#">Media Gallery</a>
        <a href="#">Dashboard</a>
        <a href="#">Reports</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        
        
      </nav>
      <div className='auth-buttons'>
        <Link to="/login" className='btn'>Login</Link>
        <Link to="/register" className='btn'>Register</Link>
      </div>

    </header>

  )
}

export default Navbar