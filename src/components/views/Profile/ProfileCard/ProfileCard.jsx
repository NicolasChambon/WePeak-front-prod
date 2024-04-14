// Import necessary libraries
import PropTypes from 'prop-types';
import { HiLocationMarker } from 'react-icons/hi';
import { FaCalendarMinus } from 'react-icons/fa6';

// Import stylesheet
import './ProfileCard.scss';

const ProfileCard = ({
  firstname,
  lastname,
  email,
  city,
  memberSince,
  thumbnail,
  bio,
  sportsNumber,
  subscriptionsNumber,
  pastActivitiesNumber,
}) => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-imgContainer">
        <img className="ProfileCard-imgContainer-img" src={thumbnail} alt="" />
        <div className="ProfileCard-imgContainer-userData">
          <h3>
            {firstname} {lastname}
          </h3>
          {email && <p>{email}</p>}
          <div className="ProfileCard-imgContainer-userData-city">
            <HiLocationMarker />
            <p>{city}</p>
          </div>
          <div className="ProfileCard-imgContainer-userData-date">
            <FaCalendarMinus />
            <p>
              Membre WePeak depuis{' '}
              {new Date(memberSince).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="ProfileCard-stats">
        <div className="ProfileCard-stats-stat left">
          <p className="ProfileCard-stats-stat-number">{sportsNumber}</p>
          <p className="ProfileCard-stats-stat-name">Sports</p>
        </div>
        <div className="ProfileCard-stats-stat center">
          <p className="ProfileCard-stats-stat-number">{subscriptionsNumber}</p>
          <p className="ProfileCard-stats-stat-name">Inscriptions</p>
        </div>
        <div className="ProfileCard-stats-stat right">
          <p className="ProfileCard-stats-stat-number">
            {pastActivitiesNumber}
          </p>
          <p className="ProfileCard-stats-stat-name">
            Activités <br /> passées
          </p>
        </div>
      </div>
      <div className="ProfileCard-bio">
        <h4 className="ProfileCard-bio-title">Bio</h4>
        <p className="ProfileCard-bio-text">{bio}</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  city: PropTypes.string,
  memberSince: PropTypes.string,
  thumbnail: PropTypes.string,
  bio: PropTypes.string,
  sportsNumber: PropTypes.number,
  subscriptionsNumber: PropTypes.number,
  pastActivitiesNumber: PropTypes.number,
};

ProfileCard.defaultProps = {
  firstname: '',
  lastname: '',
  email: '',
  city: '',
  memberSince: '',
  thumbnail: '',
  bio: '',
  sportsNumber: 0,
  subscriptionsNumber: 0,
  pastActivitiesNumber: 0,
};

export default ProfileCard;
