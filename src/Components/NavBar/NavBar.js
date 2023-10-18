// import React, { useState, useEffect } from 'react';
// import './NavBar.scss';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import logoImage from '../../images/refuge.png';

// export default function NavBar() {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     console.log("NavBar Mounted");
//   }, []);

//   const handleLogin = () => {
//     setLoggedIn(true);
//     navigate('/organizationDashboard');
//   }

//   const handleOrganizationClick = () => {
//     if (!loggedIn) {
//       navigate('/OrganizationDashboard');
//     }
//   }

//   const showLoginForm = !loggedIn && location.pathname === '/OrganizationDashboard';

//   return (
//     <nav className='nav-bar'>
//       <div className="navbar-logo">
//         <NavLink to='/'>
//           <img src={logoImage} alt="Logo" />
//         </NavLink>
//       </div>
//       <div className="nav-items">
//         <NavLink className='nav-link' to='/provideAid'>aid request</NavLink>
//         <NavLink className='nav-link' to='/'>donate</NavLink>
//         {!loggedIn && <NavLink className='nav-link' to='/OrganizationDashboard' onClick={handleOrganizationClick}>organization</NavLink>}
//         <NavLink className='nav-link' to='/'>mission</NavLink>
//       </div>
//       <div className="login-container">
//         {loggedIn ? (
//           <>
//             <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
//             <button className='nav-button' onClick={() => { setLoggedIn(false); }}>logout</button>
//           </>
//         ) : (
//           showLoginForm && (
//             <form onSubmit={(e) => {
//               e.preventDefault();
//               handleLogin();
//             }}>
//               <button className='nav-button' type="submit">login please</button>
//               {/* <NavLink className='nav-link' to='/organizationDashboard'>login please</NavLink> */}
//             </form>
//           )
//         )}
//       </div>
//     </nav>
//   );
// }


import React, { useEffect } from 'react';
import './NavBar.scss';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../images/refuge.png';

export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("NavBar Mounted");
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/organizationDashboard');
  }

  const handleOrganizationClick = () => {
    if (!isLoggedIn) {
      navigate('/OrganizationDashboard');
    }
  }

  const showLoginForm = !isLoggedIn && location.pathname === '/OrganizationDashboard';

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
        {!isLoggedIn && <NavLink className='nav-link' to='/OrganizationDashboard' onClick={handleOrganizationClick}>organization</NavLink>}
        <NavLink className='nav-link' to='/'>mission</NavLink>
      </div>
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
            <button className='nav-button' onClick={() => { setIsLoggedIn(false); }}>logout</button>
          </>
        ) : (
          showLoginForm && (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}>
              <button className='nav-button' type="submit">login please</button>
              {/* <NavLink className='nav-link' to='/organizationDashboard'>login please</NavLink> */}
            </form>
          )
        )}
      </div>
    </nav>
  );
}
