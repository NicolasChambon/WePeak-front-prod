import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RiImageAddFill } from 'react-icons/ri';
import { FaTrashAlt } from 'react-icons/fa';

import {
  changeInputSearch,
  changeInputSearchValue,
  fetchCitiesSearch,
  resetSearch,
} from '../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../actions/activityActions';
import Map from './Map/Map';

import './CreateActivity.scss';
import imageByDefault from '../../../assets/images/image_placeholder.png';
import InputSearch from './InputSearch/InputSearch';
import { fetchSports } from '../../../actions/sportsActions';
import {
  changeInputValue,
  postActivityForm,
} from '../../../actions/createActivityActions';

const CreateActivity = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.register.errorMessage);
  const [image, setImage] = useState(null);
  const sports = useSelector((state) => state.sports.sports);
  const [selectedSport, setSelectedSport] = useState(null);
  const titleInput = useSelector((state) => state.createActivity.titleInput);
  const descriptionInput = useSelector(
    (state) => state.createActivity.descriptionInput
  );
  const dateInput = useSelector((state) => state.createActivity.dateInput);
  const timeInput = useSelector((state) => state.createActivity.timeInput);
  const groupSizeInput = useSelector(
    (state) => state.createActivity.groupSizeInput
  );
  const sportInput = useSelector((state) => state.createActivity.sportInput);
  const difficultyInput = useSelector(
    (state) => state.createActivity.difficultyInput
  );

  const positionFromMarker = useSelector(
    (state) => state.activity.activityAdress.address
  );

  function transformerDate(date) {
    // Diviser la date en un tableau [année, mois, jour]
    const parties = date.split('-');
    // Réorganiser les parties pour obtenir le format MM-DD-YYYY
    const dateReorganisee = `${parties[1]}-${parties[2]}-${parties[0]}`;
    // Remplacer les tirets par des slashes
    return dateReorganisee.replace(/-/g, '/');
  }

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    dispatch(fetchSports());
  }, [dispatch]);

  // Handle the formating of the address from the marker
  const formatAddress = ({ house_number, road, city, postcode }) => {
    const parts = [house_number, road, city, postcode].filter(Boolean);
    return parts.join(' ');
  };
  const formatedAdress = formatAddress(positionFromMarker);

  useEffect(() => {
    if (positionFromMarker) {
      dispatch(changeInputSearchValue(formatedAdress, 'CreateActivity'));
    }
  }, [positionFromMarker, dispatch, formatedAdress]);

  const handleImageChange = (e) => {
    // we get the first file selected by the user from the input
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setImage(null);
  };

  return (
    <main className="CreateActivity">
      <h1 className="CreateActivity-title">Création d&apos;une activité</h1>
      <form
        action=""
        className="CreateActivity-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(changeInputValue(transformerDate(dateInput), 'dateInput'));
          dispatch(postActivityForm(navigate));
        }}
      >
        <div className="CreateActivity-form-left">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            name="title"
            value={titleInput}
            onChange={(e) => {
              dispatch(changeInputValue(e.target.value, 'titleInput'));
            }}
            required
          />
          <div className="CreateActivity-form-left-thumbnail">
            {!image ? (
              <img src={imageByDefault} alt="par défaut" />
            ) : (
              <img src={image} alt="thumbnail of the activity" />
            )}
            {image && (
              <FaTrashAlt
                className="CreateActivity-form-left-thumbnail-delete"
                onClick={handleResetImage}
              />
            )}
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <legend>Photo</legend>
              <input
                type="file"
                id="upload-picture"
                accept="image/*"
                onChange={handleImageChange}
                className="CreateActivity-form-left-wrapper-row-input"
              />
              <label
                htmlFor="upload-picture"
                className="CreateActivity-form-left-wrapper-row-button"
              >
                Choisir une image
                <RiImageAddFill />
              </label>
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="sport">Sport</label>
              <select
                id="sport"
                name="sport"
                value={sportInput}
                onChange={(e) => {
                  setSelectedSport(
                    sports.find((sport) => sport.id == e.target.value)
                  );
                  dispatch(changeInputValue(e.target.value, 'sportInput'));
                }}
                required
              >
                <option value="">Selectionner</option>
                {sports &&
                  sports.map((sport) => (
                    <option key={sport.id} value={sport.id}>
                      {sport.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="10"
            value={descriptionInput}
            onChange={(e) => {
              dispatch(changeInputValue(e.target.value, 'descriptionInput'));
            }}
            maxLength="1000"
            minLength="100"
            required
          />
        </div>
        <div className="CreateActivity-form-right">
          <label htmlFor="area">Lieu</label>
          <div className="CreateActivity-form-right-area">
            <InputSearch id="area" adressFromMarker={formatedAdress || false} />
          </div>
          <div className="CreateActivity-form-right-map">
            <Map />
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                min={today}
                value={dateInput}
                onChange={(e) => {
                  dispatch(changeInputValue(e.target.value, 'dateInput'));
                }}
                required
              />
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="time">Heure de départ</label>
              <input
                type="time"
                id="time"
                name="time"
                value={timeInput}
                onChange={(e) => {
                  dispatch(changeInputValue(e.target.value, 'timeInput'));
                }}
                required
              />
            </div>
          </div>
          <div className="CreateActivity-form-left-wrapper">
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="groupSize">Taille du groupe</label>
              <select
                id="groupSize"
                name="groupSize"
                value={groupSizeInput}
                onChange={(e) => {
                  dispatch(changeInputValue(e.target.value, 'groupSizeInput'));
                }}
                required
              >
                <option value="0">Selectionner...</option>
                <option value="5">Moins de 5 personnes</option>
                <option value="10">Moins de 10 personnes</option>
                <option value="11+">Plus de 10 personnes</option>
              </select>
            </div>
            <div className="CreateActivity-form-left-wrapper-row">
              <label htmlFor="difficulty">Niveau de difficulté</label>
              <select
                id="difficulty"
                name="difficulty"
                value={difficultyInput}
                onChange={(e) => {
                  dispatch(changeInputValue(e.target.value, 'difficultyInput'));
                }}
                required
              >
                <option value="0">Selectionner...</option>
                {selectedSport &&
                  selectedSport.difficulties.map((difficulty) => (
                    <option key={difficulty.label} value={difficulty.id}>
                      {difficulty.label}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button type="submit" className="CreateActivity-form-button">
            Créer mon activité
          </button>
          {errorMessage.length > 0 && (
            <div className="CreateActivity-form-error"> {errorMessage} </div>
          )}
        </div>
      </form>
    </main>
  );
};

export default CreateActivity;
