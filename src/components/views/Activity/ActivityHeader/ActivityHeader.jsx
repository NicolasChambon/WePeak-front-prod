// Import necessary libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import stylesheet
import './ActivityHeader.scss';

const ActivityHeader = ({ name, userId, userName, userThumbnail }) => {
  return (
    <div className="ActivityHeader">
      <h2 className="ActivityHeader-name">{name}</h2>

      {/* TODO Dynamisation of sport when available in API */}
      <h3 className="ActivityHeader-sport">Ski de randonnée</h3>

      <div className="ActivityHeader-host">
        <Link to={`/users/${userId}`}>
          <div className="ActivityHeader-host-imgContainer">
            <img src={userThumbnail} alt="" />
          </div>
        </Link>

        <div className="ActivityHeader-host-by">
          <p className="ActivityHeader-host-by-text">Organisée par</p>
          <Link to={`/users/${userId}`}>
            <p className="ActivityHeader-host-by-name">{userName}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

ActivityHeader.propTypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  userThumbnail: PropTypes.string.isRequired,
};

export default ActivityHeader;
