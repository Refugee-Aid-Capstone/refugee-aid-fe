import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { from, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_ONE_ORG } from '../../apollo-client/queries';
import '../OrganizationDashboard/OrganizationDashboard.scss';
import Spinner from '../Spinner/Spinner';
import replaceFearWithHope from '../../images/replace-fear-with-hope.png'

export default function OrganizationDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { loading, error, data } = useQuery(GET_ONE_ORG, {
    variables: { id: 9 }
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      if (error.message.includes("500")) {
        navigate("/error500");
      } else {
        navigate("/general-error");
      }
    }
  }, [error, navigate]);

  if (loading) {
    return <Spinner />;
  }
  
  if (!data || !data.organization) {
    return <p>No organization data available.</p>;
  }

  const organization = data.organization;
  
  return (
    <div className="organization-dashboard-container">
      <NavBar />
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {organization.name}!</h2>
          <div>
            <h3>Aid Requests</h3>
            <ul>
              {organization.aidRequests.map(request => (
                <li key={request.id}>
                  {request.description} - {request.status}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="replace-fear-with-hope-container">
                  <img src={replaceFearWithHope} alt="replace-fear-with-hope" className="replace-fear-with-hope-img" />
                </div>
      )}
    </div>
  );
}


// export default function OrganizationDashboard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const { loading, error, data } = useQuery(GET_ONE_ORG, {
//     variables: { id: 3 }
//     // variables: { id: 'your-organization-id' }
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (error) {
//       if (error.message.includes("500")) {
//         navigate("/error500");
//       } else {
//         navigate("/general-error");
//       }
//     }
//   }, [error, navigate]);

//   if (loading) {
//     return <Spinner />;
//   }
  
//   // Check if data and organization are available
//   if (!data || !data.organization) {
//     return (
//       <div className="organization-dashboard-container">
//         <NavBar />
//         <p>No organization data available.</p>
//         <p className="login-notice">Please log in to view the dashboard.</p>
//       </div>
//     );
//   }


//   const organization = data.organization;
  
//   return (
//     <div className="organization-dashboard-container">
//       <NavBar />
//       <div>
//         <h2>Welcome, {organization.name}!</h2>
//         <div>
//           <h3>Aid Requests</h3>
//           <ul>
//             {organization.aidRequests.map(request => (
//               <li key={request.id}>
//                 {request.description} - {request.status}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

