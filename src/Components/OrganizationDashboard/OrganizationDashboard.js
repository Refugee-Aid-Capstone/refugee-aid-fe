import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import OrgRequestCard from '../OrgRequestCard/OrgRequestCard';
import { useNavigate } from 'react-router-dom';
import { GET_ONE_ORG } from '../../apollo-client/queries';
import '../OrganizationDashboard/OrganizationDashboard.scss';
import Spinner from '../Spinner/Spinner';
export default function OrganizationDashboard( {orgId}) {

  const { loading, error, data } = useQuery(GET_ONE_ORG, {
    variables: { id: orgId },
  });

  const [aidRequests, setAidRequests] = useState([]);

  useEffect(() => { 
    if (data && data.organization) {
      setAidRequests(data.organization.aidRequests);
    }
  }, [data]);

  const handleApprove = requestId => {
    const updatedRequests = aidRequests.map(request =>
      request.id === requestId ? { ...request, status: 'Approved' } : request,
    );
    setAidRequests(updatedRequests);
  };

  const handleDecline = requestId => {
    const updatedRequests = aidRequests.map(request =>
      request.id === requestId ? { ...request, status: 'Fulfilled' } : request,
    );
    setAidRequests(updatedRequests);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      if (error.message.includes('500')) {
        navigate('/error500');
      } else {
        navigate('/general-error');
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
    <div className='organization-dashboard-container'>
      <h1>Welcome, {organization.name}!</h1>

      <div className='dashboard-content'>
        <div className='left-column'>
          <h3>Aid Requests</h3>
            {aidRequests.map(request => (
              <OrgRequestCard
                key={request.id}
                request={request}
                handleApprove={handleApprove}
                handleDecline={handleDecline}
              />
            ))}
        </div>
        <div className='right-column'>
          <h3>Organization Details</h3>
          <p>Phone: {organization.contactPhone}</p>
          <p>Email: {organization.contactEmail}</p>
          <p>Address: {organization.streetAddress}</p>
          <p>Website: {organization.website}</p>
          <p>City: {organization.city}</p>
          <p>State: {organization.state}</p>
          <p>ZIP: {organization.zip}</p>
          <button className="edit-button">Edit Details</button>
        </div>
      </div>
    </div>
  );
}
