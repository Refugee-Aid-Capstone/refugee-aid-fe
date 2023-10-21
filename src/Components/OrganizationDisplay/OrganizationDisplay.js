import React from 'react';
import welcomeImage from '../../images/welcome-usa-refugee.png';
import Map from '../../Map/Map';

export default function OrganizationDisplay({ selectedOrganization }) {
  const {
    name,
    contactPhone,
    contactEmail,
    streetAddress,
    website,
    city,
    state,
    zip,
    latitude,
    longitude,
    shareAddress,
    sharePhone,
    shareEmail,
  } = selectedOrganization;

  return (
    <div className='organization-display'>
      {selectedOrganization.name ? (
        <>
          <h2>{name}</h2>
          {sharePhone && <p>Phone: {contactPhone}</p>}
          {shareEmail && <p>Email: {contactEmail}</p>}
          {shareAddress && <p>Address: {streetAddress}</p>}
          <p>Website: {website}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>ZIP: {zip}</p>
          <div
            style={{
              height: '300px',
            }}
          >
            <Map
              latitude={latitude}
              longitude={longitude}
              selectedOrganization={selectedOrganization}
              shareAddress={shareAddress}
            />{' '}
          </div>
        </>
      ) : (
        <div className='welcome-image-container'>
          <img
            src={welcomeImage}
            alt='welcome-usa-refugee'
            className='welcome-image'
          />
        </div>
      )}
    </div>
  );
}
