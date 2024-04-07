import './ContactErrors.scss';
import PropTypes from 'prop-types';

const ContactErrors = ({ message }) => {
  return <div className="ContactErrors">{message}</div>;
};

ContactErrors.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ContactErrors;
