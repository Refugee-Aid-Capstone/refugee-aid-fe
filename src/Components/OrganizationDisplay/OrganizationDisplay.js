import React from 'react';
import welcomeImage from '../../images/welcome-usa-refugee.png'

export default function OrganizationDisplay({ selectedOrganization }) {
  return (
    <div className='right-section'>
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
              width: '300px',
              height: '300px',
              backgroundColor: 'gray',
            }}
          >
            {' '}
            {/* Map Here (Integration with map service required)*/}
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