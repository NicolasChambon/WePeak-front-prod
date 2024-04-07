import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { IconContext } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import './EventCard.scss';

const EventCard = ({ title, date, difficulty, slug }) => {
  return (
    <article className="EventCard">
      <Link to={`/activities/${slug}`}>
        <img
          src="/src/assets/images/Home_hero_3.avif"
          alt=""
          className="EventCard-image"
        />
      </Link>
      <div className="EventCard-content">
        <span className="EventCard-content-category">Lancé de nain</span>
        <span className={`EventCard-content-category ${difficulty}`}>
          {difficulty}
        </span>
        <time dateTime={date} className="EventCard-content-date">
          {new Date(date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h3 className="EventCard-content-title">{title}</h3>
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
};

export default EventCard;
