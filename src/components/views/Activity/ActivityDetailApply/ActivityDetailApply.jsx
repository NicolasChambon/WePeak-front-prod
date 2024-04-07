import PropTypes from 'prop-types';

import './ActivityDetailApply.scss';

const ActivityDetailApply = ({ description }) => {
  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      <button type="button" className="Activity-detailsAndApply-apply">
        Participer
      </button>
    </div>
  );
};

ActivityDetailApply.propTypes = {
  description: PropTypes.string.isRequired,
};

export default ActivityDetailApply;
