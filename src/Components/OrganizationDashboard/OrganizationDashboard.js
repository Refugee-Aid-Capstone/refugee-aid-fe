import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_ONE_ORG } from '../../apollo-client/queries';
import '../OrganizationDashboard/OrganizationDashboard.scss';
import Spinner from '../Spinner/Spinner';

export default function OrganizationDashboard() {

  // console.log("Inside OrganizationDashboard Component", setIsLoggedIn); //dont forget to delete


  // console.log("OrganizationDashboard.js:", typeof setIsLoggedIn); //dont forget to delete

  const TOTAL_ORGANIZATIONS = 10; 
  const randomOrgId = Math.floor(Math.random() * TOTAL_ORGANIZATIONS) + 1;

  const { loading, error, data } = useQuery(GET_ONE_ORG, {
    variables: { id: randomOrgId }
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
      <h2>Welcome, {organization.name}!</h2>
      <p>Address: {organization.address}</p> {/* Assuming address is available in the data */}
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
  );
}
