import React from 'react';

export default function RequestCard({ request, selectOrganization }) {
  const { id, description, aidType } = request
  return (
    <article id={id} onClick={() => selectOrganization(id)}>
      <h3>{aidType}</h3>
      <p>{description}</p>
    </article>
  );
}
