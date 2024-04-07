// Import necessary librairies
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import components
import EventCard from '../../../utils/EventCard/EventCard';

// Import stylesheet
import './ActivityGrid.scss';

const ActivityGrid = ({ userPositionName }) => {
  const activityList = useSelector((state) => state.activity.activities);

  return (
    <div className="ActivityGrid">
      <div className="ActivityGrid-top">
        <h2 className="ActivityGrid-top-title">
          Evènements à venir proches de {userPositionName}
        </h2>
        <Link to="/activities" className="ActivityGrid-top-link">
          Voir tous les évènements
        </Link>
      </div>
      <div className="ActivityGrid-grid">
        {activityList.map((activity) => (
          <EventCard
            key={activity['0'].id}
            title={activity['0'].name}
            date={activity['0'].date}
            difficulty={activity['0'].difficulty}
            slug={activity['0'].id}
          />
        ))}
      </div>
    </div>
  );
};

ActivityGrid.propTypes = {
  userPositionName: PropTypes.string.isRequired,
};

export default ActivityGrid;
