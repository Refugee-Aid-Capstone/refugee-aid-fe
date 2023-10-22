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
        {status !== 'pending' && <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'pending' } })
          }
          aria-label={`Mark request for ${aidType} aid as pending`}
        >
          Approve
        </button>}
       { status !== 'fulfilled' && <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'fulfilled' } })
          }
          aria-label={`Mark request for ${aidType} aid as fulfilled`}

        >
          Fulfilled
        </button>}
        {status !== 'active' && <button
          className='action-button'
          onClick={() =>
            updateStatus({ variables: { id: id, status: 'active' } })
          }
          aria-label={`Mark request for ${aidType} aid as active`}
        >
          Reactivate
        </button>}
      </div>
    </article>
  );
}
