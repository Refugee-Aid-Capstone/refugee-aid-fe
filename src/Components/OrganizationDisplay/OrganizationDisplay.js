import React from 'react';
import welcomeImage from '../../images/welcome-usa-refugee.png'
import Map from '../../Map/Map';

export default function OrganizationDisplay({ selectedOrganization }) {
  const {latitude, longitude} = selectedOrganization

  return (
    <div className='organization-display'>
      {selectedOrganization.name ? (
        <>
          <h2>{selectedOrganization.name}</h2>
          <p>Phone: {selectedOrganization.contactPhone}</p>
          <p>Email: {selectedOrganization.contactEmail}</p>
          <p>Address: {selectedOrganization.streetAddress}</p>
          <p>Website: {selectedOrganization.website}</p>
          <p>City: {selectedOrganization.city}</p>
          <p>State: {selectedOrganization.state}</p>
          <p>ZIP: {selectedOrganization.zip}</p>
          <div
            style={{
              height: '300px',
            }}
          >
            <Map latitude={latitude} longitude={longitude} selectedOrganization={selectedOrganization}/>
            {' '}
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