import React from 'react';
import './RequestCard.scss';

export default function RequestCard({ request, selectOrganization }) {
  const {
    id,
    description,
    aidType,
    language,
    status,
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
      <p className='card-text'>Status: {status}</p>
    </article>
  );
}
