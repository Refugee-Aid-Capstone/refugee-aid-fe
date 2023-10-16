import React from 'react';
import './NavBar.scss'; 
import { NavLink } from 'react-router-dom';
import logoImage from '../../images/refuge.PNG';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
        <NavLink to='/'>
          <img src={logoImage} alt="Logo" />
        </NavLink>
      </div>
      <NavLink className='nav-link' to='/provideAid'>Aid</NavLink>
      {/* <NavLink className='nav-link' to='/ourMission'>Mission</NavLink> */}
    </nav>
  );
}
