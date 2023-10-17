import React from 'react';
import './NavBar.scss'; 
import { NavLink } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
        <NavLink to='/'>
          <img src={logoImage} alt="Logo" />
        </NavLink>
      </div>
      <NavLink className='nav-link' to='/provideAid'>aid request</NavLink>
      <NavLink className='nav-link' to='/'>donate</NavLink>
      <NavLink className='nav-link' to='/OrganizationDashboard'>organization</NavLink> 
      <NavLink className='nav-link' to='/'>mission</NavLink>
    </nav>
  );
}
