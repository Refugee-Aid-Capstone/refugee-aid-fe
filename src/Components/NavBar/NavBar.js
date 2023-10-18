import React, { useEffect } from 'react';
import './NavBar.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {


  console.log("NavBar rendering. isLoggedIn:", isLoggedIn);
  console.log(typeof setIsLoggedIn); //dont forget to delete

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("NavBar Mounted"); //dont forget to delete
  }, []);

  const handleOrganizationLogin = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false); 
      console.log("Attempting to logout and redirect to homepage");
      navigate('/');
    } else {
      setIsLoggedIn(true);
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
            {/* <button className='nav-button logout' onClick={() => { setIsLoggedIn(false); }}>logout</button> */}
            <button className='nav-button logout' onClick={() => { console.log('Logout button clicked!'); setIsLoggedIn(false); }}>logout</button>


          </>
        ) : (
          <button className='nav-button' onClick={handleOrganizationLogin}>organization login</button>
        )}
      </div>
    </nav>
  );
}
