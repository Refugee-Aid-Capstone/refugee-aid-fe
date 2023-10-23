import '../RequestCard/RequestCard.scss';
import '../OrganizationDashboard/OrganizationDashboard.scss';
import './OrgRequest.scss';
import { useMutation } from '@apollo/client';
import { UPDATE_AID_REQUEST } from '../../apollo-client/mutations';
import PropTypes from 'prop-types';

export default function OrgRequestCard({ request }) {
  const { id, description, aidType, language, status } = request;
  const [updateStatus] = useMutation(UPDATE_AID_REQUEST);

  const buttons = ['pending', 'fulfilled', 'active']
    .filter(buttonType => buttonType !== status)
    .map(buttonType => (
      <button
        key={buttonType}
        className='action-button'
        onClick={() =>
          updateStatus({ variables: { id: id, status: buttonType } })
        }
        aria-label={`Mark request for ${aidType} aid as ${buttonType}`}
      >
        {buttonType}
      </button>
    ));

  return (
    <article className='request-card org' id={id}>
      <h3 className='card-text type'>{aidType} Aid</h3>
      {language !== 'None' && <p className='card-text'>Language: {language}</p>}
      <p className='card-text description'>{description}</p>
      <p className='card-text'>Status: {status}</p>
      <div>{buttons}</div>
    </article>
  );
}

OrgRequestCard.propTypes = {
  request: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    aidType: PropTypes.string,
    language: PropTypes.string,
    status: PropTypes.string,
  }),
};
