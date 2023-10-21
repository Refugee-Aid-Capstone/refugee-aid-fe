import React, { useState } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar({ isLoggedIn, handleLogin }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
        <NavLink to='/'>
          <img src={logoImage} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
        <NavLink className='nav-link' to='/provideAid'>aid request</NavLink>
        <NavLink className='nav-link' to='/'>mission</NavLink>
        <NavLink className='nav-link' to='/contact'>helpful resources</NavLink>
      </div>
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <NavLink className='nav-link org-dashboard' to='/organizationDashboard'>organization dashboard</NavLink>
            <button className='nav-button logout' onClick={handleLogin}>logout</button>
          </>
        ) : (
          <button className='nav-button' onClick={handleLogin}>organization login</button>
        )}
      </div>
    </nav>
  );
}


