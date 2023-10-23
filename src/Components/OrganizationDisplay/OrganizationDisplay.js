import React from 'react';
import welcomeImage from '../../images/welcome-usa-refugee.png';
import Map from '../../Map/Map';
import '../ProvideAidPage/ProvideAidPage.scss'
import PropTypes from 'prop-types';

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
            {shareAddress && <address>Address: {streetAddress}</address>}
            <p>Website: {website}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>ZIP: {zip}</p>
            <div style={{ height: '300px' }}>
              <Map
                latitude={latitude}
                longitude={longitude}
                selectedOrganization={selectedOrganization}
                shareAddress={shareAddress}
              />
            </div>
          </>
        ) : (
          <div className='welcome-image-container'>
            <img
              src={welcomeImage}
              alt='Illustration representing the welcoming of a refugee to the USA'
              className='welcome-image'
            />
          </div>
        )}
      </div>
    );
  }
  
  OrganizationDisplay.propTypes = {
    selectedOrganization: PropTypes.shape({
      name: PropTypes.string,
      contactPhone: PropTypes.string,
      contactEmail: PropTypes.string,
      streetAddress: PropTypes.string,
      website: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zip: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      shareAddress: PropTypes.bool,
      sharePhone: PropTypes.bool,
      shareEmail: PropTypes.bool,
    })
  }