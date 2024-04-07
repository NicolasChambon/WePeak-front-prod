import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetContactForm } from '../../../../actions/contactActions';

import './ContactSuccess.scss';

const ContactSuccess = ({ message }) => {
  const dispatch = useDispatch();

  return (
    <div className="ContactSuccess">
      <p className="ContactSuccess-message">{message}</p>
      <Link
        className="ContactSuccess-button"
        to="/"
        onClick={() => {
          dispatch(resetContactForm());
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
};

ContactSuccess.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ContactSuccess;
