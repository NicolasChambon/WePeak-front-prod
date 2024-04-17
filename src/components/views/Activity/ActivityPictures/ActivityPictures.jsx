import PropTypes from 'prop-types';

import './ActivityPictures.scss';

const ActivityPictures = ({ pictures }) => {
  return (
    <div className="ActivityPictures">
      <h3>Photos</h3>
      <div className="ActivityPictures-list">
        {pictures.map((picture) => (
          <div
            className="ActivityPictures-list-imgContainer"
            key={picture.link}
          >
            <img src={picture.link} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

ActivityPictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivityPictures;
