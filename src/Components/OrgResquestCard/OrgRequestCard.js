import '../Components/RequestCard/RequestCard.scss'

export default function OrgRequestCard({ request }) {
  const { id, description, aidType, language, status, organization } = request;

  return (
    <article
      className='request-card'
      id={id}
    >
      <h3 className='card-text type'>{aidType} Aid</h3>
      <p className='card-text org'>{organization.name}</p>
      {language && <p className='card-text'>Language: {language}</p>}
      <p className='card-text description'>{description}</p>
      <p className='card-text'>Status: {status}</p>
      <div>
        <button onClick={() => handleApprove(request.id)}>Approve</button>
        <button onClick={() => handleDecline(request.id)}>Fulfilled</button>
      </div>
    </article>
  );
}
