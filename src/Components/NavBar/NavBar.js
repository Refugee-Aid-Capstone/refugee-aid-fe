import React, { useEffect } from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar({ isLoggedIn, handleLogin }) {


  console.log("NavBar rendering. isLoggedIn:", isLoggedIn); //dont forget to delete

  useEffect(() => {
    console.log("NavBar Mounted"); //dont forget to delete
  }, []);

  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
        <NavLink to='/'>
          <img src={logoImage} alt="Logo" className="logo-image" />
        </NavLink>
      </div>
      <div className="nav-items">
        <NavLink className='nav-link' to='/provideAid'>aid request</NavLink>
        <NavLink className='nav-link' to='/'>donate</NavLink>
        <NavLink className='nav-link' to='/'>mission</NavLink>
        <NavLink className='nav-link' to='/contact'>contact us</NavLink>
      </div>
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
            <button className='nav-button logout' onClick={handleLogin}>logout</button>

          </>
        ) : (
          <button className='nav-button' onClick={handleLogin}>organization login</button>
        )}
      </div>
    </nav>
  );
}



