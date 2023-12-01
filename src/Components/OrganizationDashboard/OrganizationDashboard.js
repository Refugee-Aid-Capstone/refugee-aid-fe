import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ONE_ORG } from '../../apollo-client/queries';
import OrgRequestCard from '../OrgRequestCard/OrgRequestCard';
import Spinner from '../Spinner/Spinner';
import '../OrganizationDashboard/OrganizationDashboard.scss';
import PropTypes from 'prop-types';
import CareRequestForm from '../CareRequestForm/CareRequestForm';
import { Routes, Route } from 'react-router-dom';

export default function OrganizationDashboard({ orgId }) {
  const navigate = useNavigate();
  const [aidRequests, setAidRequests] = useState([]);

  const { loading, error, data } = useQuery(GET_ONE_ORG, {
    variables: { id: orgId },
  });

  useEffect(() => {
    if (data && data.organization) {
      setAidRequests(data.organization.aidRequests);
    }
  }, [data]);

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

  const handleOpenForm = () => {
    navigate('/care-request');
  };

  const {
    name,
    contactPhone,
    contactEmail,
    streetAddress,
    website,
    city,
    state,
    zip,
  } = data.organization;

  return (
    <div className='organization-dashboard-container'>
      <h1>Welcome, {name}!</h1>
      <div className='dashboard-content'>
        <section className='left-column'>
          <h3>Aid Requests</h3>
          {aidRequests.map((request) => (
            <OrgRequestCard key={request.id} request={request} />
          ))}
        </section>
        <section className='right-column'>
          <h3>Organization Details</h3>
          <p>Phone: {contactPhone}</p>
          <p>Email: {contactEmail}</p>
          <p>Address: {streetAddress}</p>
          <p>Website: {website}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>ZIP: {zip}</p>
          <button className='create-org-aid-request' onClick={handleOpenForm}>
            Create New Aid Request
          </button>
        </section>
      </div>
      <Routes>
  <Route path='/care-request' element={<CareRequestForm orgId={orgId} />} />
</Routes>
    </div>
  );
}

OrganizationDashboard.propTypes = {
  orgId: PropTypes.number,
};
