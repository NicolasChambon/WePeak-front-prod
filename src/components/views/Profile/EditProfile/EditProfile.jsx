// Import necessary librairies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';

// Import stylesheet
import './EditProfile.scss';

const EditProfile = ({ firstname, lastname, thumbnail }) => {
  return (
    <div className="EditProfile">
      <div className="EditProfile-imgContainer">
        <img src={thumbnail} alt="" />
      </div>
      <div className="EditProfile-nameAndEdit">
        <p className="EditProfile-nameAndEdit-name">
          {firstname} {lastname}
        </p>
        <Link className="EditProfile-nameAndEdit-edit" to="/profile/edit">
          <BiEditAlt />
          <p>Modifier le profil</p>
        </Link>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  thumbnail: PropTypes.string,
};

EditProfile.defaultProps = {
  firstname: '',
  lastname: '',
  thumbnail: '',
};

export default EditProfile;
