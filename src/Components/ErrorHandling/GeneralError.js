import { NavLink } from 'react-router-dom';
import SmilingChild from '../../images/afghangirl.jpg';
import './GeneralError.scss';

function GeneralError() {

  return (
    <div className="general-error-msg">
      <h1>Oops! We're looking for it!</h1>
      <img src={SmilingChild} alt="Smiling litle refugee girl" />
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <button className="general-error-go-home-button" aria-label="Go back to the home page">
          Back to Main Page
        </button>
      </NavLink>
      <h2 className="general-error-message">Something went wrong.</h2>
    </div>
  );
}

export default GeneralError;

