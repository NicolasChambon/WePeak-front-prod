import { Link } from 'react-router-dom';

import { IoIosMore } from 'react-icons/io';
import PropTypes from 'prop-types';

import './ParticipationsCard.scss';

const ParticipationsCard = ({ title, participations }) => {
  return (
    <div className="ParticipationsCard">
      <h4 className="ParticipationsCard-title">
        {`${title} (${participations.length})`}
      </h4>
      <div className="ParticipationsCard-list">
        {participations.map((participation) => (
          <div
            className="ParticipationsCard-list-item"
            key={participation.activity.id}
          >
            <Link
              className="ParticipationsCard-list-item-imgContainer"
              to={`/activities/${participation.activity.id}`}
            >
              <img src={participation.activity.thumbnail} alt="" />
            </Link>
            <div className="ParticipationsCard-list-item-content">
              <p className="ParticipationsCard-list-item-content-name">
                {participation.activity.name}
              </p>
              <p className="ParticipationsCard-list-item-content-sport">
                {participation.activity.sports[0].label}
              </p>
              <p className="ParticipationsCard-list-item-content-locationAndDate">
                {`${participation.activity.city}, ${new Date(
                  participation.activity.date
                ).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}`}
              </p>
            </div>
          </div>
        ))}
      </div>
      {participations.length > 3 && (
        <button type="button" className="ParticipationsCard-more">
          <IoIosMore />
        </button>
      )}
    </div>
  );
};

ParticipationsCard.propTypes = {
  title: PropTypes.string.isRequired,
  participations: PropTypes.arrayOf(
    PropTypes.shape({
      activity: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        thumbnail: PropTypes.string,
        sports: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ParticipationsCard;
