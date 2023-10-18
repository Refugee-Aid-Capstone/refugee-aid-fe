import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';

export default function OrganizationDashboard() {
  // Assuming the loggedIn state is passed as a prop or accessed via context.
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  

  return (
    <div>
      <NavBar />
      {isLoggedIn ? (
        <div>
          {/* Render the dashboard content */}
          {/* ... */}
        </div>
      ) : (
        <p>Please log in to view the dashboard.</p>
      )}
    </div>
  );
}


// import React, { useState } from 'react';
// import NavBar from '../NavBar/NavBar';
// import './OrganizationDashboard.scss';
// import { NavLink } from 'react-router-dom';

// export default function OrganizationDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (credentials) => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       <NavBar />
//       {!isLoggedIn ? (
//         <div className="login-container">
//           <form onSubmit={(e) => {
//             e.preventDefault();
//             handleLogin();
//           }}>
//             <button className='nav-button' type="submit">Login</button>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <NavLink className='nav-link' to='/organizationDashboard'>organization dashboard</NavLink>
//           <button className='nav-button' onClick={() => setIsLoggedIn(false)}>logout</button>
//         </div>
//       )}
//     </div>
//   );
// }
