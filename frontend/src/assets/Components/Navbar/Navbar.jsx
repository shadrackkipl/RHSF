import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'


const Navbar = () => {
  return (
    <header className='header'>
      <img src={logo} alt="RHSF Logo" className='logo' />
      <nav >
        <ul className='navbar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/institutions">Institutions</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/livestream">Livestream</Link></li>
          <li><Link to="/radio">Radio</Link></li>
          <li><Link to="/media gallery">Media Gallery</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        
        
      </nav>
      <div className='auth-buttons'>
        <Link to="/login" className='btn'>Login</Link>
        <Link to="/register" className='btn'>Register</Link>
      </div>

    </header>

  )
}

export default Navbar