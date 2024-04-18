// Import necessary libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Import utils
import rewriteImagePath from '../../../../utils/rewriteImagePath';

// Import stylesheet
import './ActivityPeople.scss';

const ActivityPeople = ({ people, groupSize }) => {
  const people0 = people.filter((person) => person.status === 0);
  const people1 = people.filter((person) => person.status === 1);

  return (
    <div className="ActivityPeople">
      <h3>
        Participants [{people1.length}/{groupSize}]
      </h3>
      <div className="ActivityPeople-cards">
        {people1.map((person) => (
          <Link to={`/users/${person.user.id}`} key={person.id}>
            <div className="ActivityPeople-cards-card">
              <div className="ActivityPeople-cards-card-imgContainer">
                <img src={rewriteImagePath(person.user.thumbnail)} alt="" />
              </div>

              <p className="ActivityPeople-cards-card-name">
                {person.user.pseudo}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {people0.length > 0 && (
        <p className="ActivityPeople-cards-waiting">En attente...</p>
      )}
      <div className="ActivityPeople-cards waiting">
        {people0.map((person) => (
          <Link to={`/users/${person.user.id}`} key={person.id}>
            <div className="ActivityPeople-cards-card">
              <div className="ActivityPeople-cards-card-imgContainer">
                <img className="waiting" src={person.user.thumbnail} alt="" />
              </div>

              <p className="ActivityPeople-cards-card-name waiting">
                {person.user.pseudo}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

ActivityPeople.propTypes = {
  groupSize: PropTypes.number.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ActivityPeople;
