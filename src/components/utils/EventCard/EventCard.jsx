import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HiLocationMarker } from 'react-icons/hi';
import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import './EventCard.scss';

const EventCard = ({
  title,
  date,
  difficulty,
  slug,
  sport,
  thumbnail,
  city,
  distance,
}) => {
  const formatedDistance = distance.toFixed(1);
  // je veux formater mon titre pour qu'il ne dépasse pas 30 caractères
  // const titleLength = title.length;
  // const maxLength = 30;
  // const foratedTitle = titleLength > maxLength ? title.slice(0, maxLength) + '...' : title;
  const formatedTitle = title.length > 30 ? `${title.slice(0, 30)} ...` : title;

  return (
    <article className="EventCard">
      <Link to={`/activities/${slug}`}>
        <img src={thumbnail} alt="" className="EventCard-image" />
      </Link>
      <div className="EventCard-content">
        <span className={`EventCard-content-category ${sport}`}>{sport}</span>
        <span className="EventCard-content-category">{difficulty}</span>
        <time dateTime={date} className="EventCard-content-date">
          {new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h3 className="EventCard-content-title">{formatedTitle}</h3>
        <p className="EventCard-content-city">
          <HiLocationMarker className="EventCard-content-city-icon" />
          {city}
          <span>(à {formatedDistance} km)</span>
        </p>
        <Link to={`/activities/${slug}`} className="EventCard-content-link">
          <span>Lire plus</span>
          <IconContext.Provider value={{ size: '.6rem' }}>
            <FiArrowRight />
          </IconContext.Provider>
        </Link>
      </div>
    </article>
  );
};

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.number.isRequired,
  sport: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
};

export default EventCard;
