// Import necessary libraries
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import stylesheet
import './ActivityHeader.scss';

const ActivityHeader = ({ name, userId, userName }) => {
  return (
    <div className="ActivityHeader">
      <h2 className="ActivityHeader-name">{name}</h2>

      {/* TODO Dynamisation of sport when available in API */}
      <h3 className="ActivityHeader-sport">Ski de randonnée</h3>

      <div className="ActivityHeader-host">
        <Link to={`/user/${userId}`}>
          <div className="ActivityHeader-host-imgContainer">
            {/* TODO Dynamisation of user picture when available in API */}
            <img
              src="https://ca.slack-edge.com/T060RPZMDH6-U0618RK2TDZ-75fbfe1c1df7-512"
              alt=""
            />
          </div>
        </Link>

        <div className="ActivityHeader-host-by">
          <p className="ActivityHeader-host-by-text">Organisée par</p>
          <Link to={`/user/${userId}`}>
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
};

export default ActivityHeader;
