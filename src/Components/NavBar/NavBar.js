import React, { useState } from 'react';
import './NavBar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/organizationDashboard');
  }
  
  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
  <NavLink to='/'>
    <img src={logoImage} alt="Logo" />
  </NavLink>
</div>
<div className="nav-items">
  <NavLink className='nav-link' to='/provideAid'>aid reguest</NavLink>
  <NavLink className='nav-link' to='/'>donate</NavLink>
  {/* <NavLink className='nav-link' to='/OrganizationDashboard'>organization</NavLink>  */}
  <NavLink className='nav-link' to='/'>mission</NavLink>
</div>
<div className="login-container">  
{loggedIn ? (
  <>
    <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
    <button className='nav-button' onClick={() => setLoggedIn(false)}>logout</button>
  </>
) : (
  <button className='nav-button' onClick={handleLogin}>login</button>
)}

</div>
    </nav>
  );
}  