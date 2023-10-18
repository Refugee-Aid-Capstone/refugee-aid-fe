import React, { useEffect } from 'react';
import './NavBar.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {

  console.log(typeof setIsLoggedIn); //dont forget to delete

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("NavBar Mounted"); //dont forget to delete
  }, []);

  const handleOrganizationLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);  // Logout
    } else {
      setIsLoggedIn(true);   // Login
      navigate('/organizationDashboard');
    }
  }

  return (
    <nav className='nav-bar'>
      <div className="navbar-logo">
        <NavLink to='/'>
          <img src={logoImage} alt="Logo" />
        </NavLink>
      </div>
      <div className="nav-items">
        <NavLink className='nav-link' to='/provideAid'>aid request</NavLink>
        <NavLink className='nav-link' to='/'>donate</NavLink>
        <NavLink className='nav-link' to='/'>mission</NavLink>
      </div>
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
            <button className='nav-button' onClick={() => { setIsLoggedIn(false); }}>logout</button>

          </>
        ) : (
          <button className='nav-button' onClick={handleOrganizationLogin}>organization login</button>
        )}
      </div>
    </nav>
  );
}
