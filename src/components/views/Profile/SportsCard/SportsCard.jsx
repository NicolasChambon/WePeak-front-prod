import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import stylesheet
import './SportsCard.scss';

const SportsCard = ({ sports }) => {
  return (
    <div className="SportsCard">
      <h4 className="SportsCard-title">Mes sports ({sports.length})</h4>
      <div className="SportsCard-list">
        {sports.map((sport) => (
          <Link
            key={sport.id}
            to="/activities"
            className="SportsCard-list-sport"
          >
            {sport.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

SportsCard.propTypes = {
  sports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

SportsCard.defaultProps = {
  sports: [],
};

export default SportsCard;
