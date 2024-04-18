import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  handleClickOnSignInButton,
  handleClickOnSignOffButton,
} from '../../../../actions/participationsActions';
import './ActivityDetailApply.scss';

const ActivityDetailApply = ({ description, user, people, createdBy }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserOrganizer = user === createdBy;
  const isUserParticipating = people.some((person) => person.user.id === user);
  let userParticipation = {};

  if (isUserParticipating) {
    userParticipation = people.find((person) => person.user.id === user);
  }

  return (
    <div className="Activity-detailsAndApply">
      <div className="Activity-detailsAndApply-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      {!isUserParticipating && (
        <button
          type="button"
          className="Activity-detailsAndApply-button sign-in"
          onClick={() => {
            if (user === null) {
              navigate('/login');
            }
            return dispatch(handleClickOnSignInButton());
          }}
        >
          Participer
        </button>
      )}

      {isUserParticipating && !isUserOrganizer && (
        <button
          type="button"
          className="Activity-detailsAndApply-button sign-off"
          onClick={() => {
            dispatch(handleClickOnSignOffButton(userParticipation.id));
          }}
        >
          Se desinscrire
        </button>
      )}
      {isUserOrganizer && (
        <button type="button" className="Activity-detailsAndApply-button edit">
          Modifier mon activité
        </button>
      )}
    </div>
  );
};

ActivityDetailApply.propTypes = {
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  user: PropTypes.number,
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
  createdBy: PropTypes.number.isRequired,
};

export default ActivityDetailApply;
