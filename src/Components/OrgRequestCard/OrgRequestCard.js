import '../RequestCard/RequestCard.scss';
import '../OrganizationDashboard/OrganizationDashboard.scss';

import React from 'react';

export default function OrgRequestCard({ request, updateStatus }) {
  const { id, description, aidType, language, status } = request;

  return (
    <article className='request-card org' id={id}>
      <h3 className='card-text type'>{aidType} Aid</h3>
      {language && <p className='card-text'>Language: {language}</p>}
      <p className='card-text description'>{description}</p>
      <p className='card-text'>Status: {status}</p>
      <div>
        <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'pending' } })
          }
        >
          Approve
        </button>
        <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'fulfilled' } })
          }
        >
          Fulfilled
        </button>
        <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'Active' } })
          }
        >
          Reactivate
        </button>
      </div>
    </article>
  );
}
