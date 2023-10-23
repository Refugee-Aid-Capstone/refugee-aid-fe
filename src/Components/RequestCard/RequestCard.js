import React from 'react';
import './RequestCard.scss';
import PropTypes from 'prop-types';


export default function RequestCard({ request, selectOrganization }) {
  const {
    id,
    description,
    aidType,
    language,
    organization,
  } = request;

  return (
    <article
      className='request-card'
      id={id}
      onClick={() => selectOrganization(organization)}
    >
      <h3 className='card-text type'>{aidType} Aid</h3>
      <p className='card-text org'>{organization.name}</p>
      {language && <p className='card-text'>Language: {language}</p>}
      <p className='card-text description'>{description}</p>
    </article>
  );
}

RequestCard.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    aidType: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }),
  selectOrganization: PropTypes.func
};