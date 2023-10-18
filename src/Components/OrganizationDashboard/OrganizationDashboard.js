import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import { useQuery } from '@apollo/client';
import { GET_ONE_ORG } from '../../apollo-client/queries';
import '../OrganizationDashboard/OrganizationDashboard.scss';


export default function OrganizationDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const { loading, error, data } = useQuery(GET_ONE_ORG, {
    variables: { id: 'your-organization-id' }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
        <p className="login-notice">Please log in to view the dashboard.</p>
      )}
    </div>
  );  
}

//The component where you set up the ApolloProvider (usually the main App component).
// Any other components or files that might be related to the GraphQL query and its execution.
// If there are any specific error messages you're seeing, please include them as well.