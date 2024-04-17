// Import necessary libraries
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';

// Import actions
import {
  changeEditProfileInput,
  postEditProfileForm,
  deleteProfile,
} from '../../../actions/editProfileActions';

// Import stylesheet
import './ProfileEdition.scss';

const ProfileEdition = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const profileId = useSelector((state) => state.user.currentUser.id);
  const errorMessage = useSelector((state) => state.editProfile.errorMessage);

  // we get all the current user data from the store before the user has modified
  // it to display it in the form as default values
  const currentFirstname = useSelector(
    (state) => state.user.currentUser.firstname
  );
  const currentLastname = useSelector(
    (state) => state.user.currentUser.lastname
  );
  const currentUsername = useSelector((state) => state.user.currentUser.pseudo);
  const currentEmail = useSelector((state) => state.user.currentUser.email);
  const currentCity = useSelector((state) => state.user.currentUser.city);
  const currentBirthdate = useSelector(
    (state) => state.user.currentUser.birthdate
  );
  // we format the birthdate to be displayed in the form
  const currentBirthdateFormatted = new Date(currentBirthdate);
  const currentBirthdateFormattedString = currentBirthdateFormatted
    .toISOString()
    .split('T')[0];
  const currentBio = useSelector((state) => state.user.currentUser.description);
  const currentThumbnail = useSelector(
    (state) => state.user.currentUser.thumbnail
  );

  // we set the default values of the form to the user data
  useEffect(() => {
    dispatch(changeEditProfileInput(currentFirstname, 'firstnameInput'));
    dispatch(changeEditProfileInput(currentLastname, 'lastnameInput'));
    dispatch(changeEditProfileInput(currentUsername, 'usernameInput'));
    dispatch(changeEditProfileInput(currentEmail, 'emailInput'));
    dispatch(changeEditProfileInput(currentCity, 'cityInput'));
    dispatch(
      changeEditProfileInput(currentBirthdateFormattedString, 'birthdateInput')
    );
    dispatch(changeEditProfileInput(currentBio, 'bioInput'));
  }, []);

  // we get all the user data from the store after the user has modified
  const firstnameInput = useSelector(
    (state) => state.editProfile.firstnameInput
  );
  const lastnameInput = useSelector((state) => state.editProfile.lastnameInput);
  const usernameInput = useSelector((state) => state.editProfile.usernameInput);
  const emailInput = useSelector((state) => state.editProfile.emailInput);
  const cityInput = useSelector((state) => state.editProfile.cityInput);
  const birthdateInput = useSelector(
    (state) => state.editProfile.birthdateInput
  );
  const bioInput = useSelector((state) => state.editProfile.bioInput);
  const oldPasswordInput = useSelector(
    (state) => state.editProfile.oldPasswordInput
  );
  const newPasswordInput = useSelector(
    (state) => state.editProfile.newPasswordInput
  );
  const confirmNewPasswordInput = useSelector(
    (state) => state.editProfile.confirmNewPasswordInput
  );
  const imageInput = useSelector((state) => state.editProfile.base64Image);

  // we get the image to display in the form
  let image = '';
  if (imageInput) {
    image = imageInput;
  } else {
    image = currentThumbnail;
  }

  // Open/Close the delete profile window when press on "Supprimer mon profil" button
  const [deleteOpenings, setDeleteOpenings] = useState(false);

  const handleImageChange = (e) => {
    // we get the first file selected by the user from the input
    const file = e.target.files[0];

    if (file) {
      // FileReader is a built-in browser API that allows to read files
      const reader = new FileReader();
      // We setup an event listener. onloadend is an event that is triggered when the file has been read.
      reader.onloadend = () => {
        // reader.result contains the file content in a data URL format (base64)
        // setImage(reader.result);
        dispatch(changeEditProfileInput(reader.result, 'base64Image'));
      };
      // readAsDataURL will read the file and transform it to a data URL.
      // At the end, the onloadend event will be triggered.
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="ProfileEdition">
      <h2 className="ProfileEdition-title">Modification de votre profil</h2>
      <form
        action="submit"
        className="ProfileEdition-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postEditProfileForm(profileId, navigate));
        }}
      >
        <div className="ProfileEdition-form-picture">
          <div className="ProfileEdition-form-picture-imgContainer">
            {!image ? (
              <img
                src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
                alt=""
              />
            ) : (
              <img src={image} alt="" />
            )}
          </div>
          <label
            htmlFor="upload-picture"
            className="ProfileEdition-form-picture-label"
          >
            Changer la photo de profil
          </label>
          <input
            type="file"
            id="upload-picture"
            accept="image/*"
            onChange={(e) => {
              handleImageChange(e);
            }}
            className="ProfileEdition-form-picture-input"
          />
        </div>
        <div className="ProfileEdition-form-firstname">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstnameInput}
            onChange={(e) => {
              dispatch(
                changeEditProfileInput(e.target.value, 'firstnameInput')
              );
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-lastname">
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastnameInput}
            onChange={(e) => {
              dispatch(changeEditProfileInput(e.target.value, 'lastnameInput'));
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-username">
          <label htmlFor="username">Nom d&apos;utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={usernameInput}
            onChange={(e) => {
              dispatch(changeEditProfileInput(e.target.value, 'usernameInput'));
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-email">
          <label htmlFor="email">Adresse email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={emailInput}
            onChange={(e) => {
              dispatch(changeEditProfileInput(e.target.value, 'emailInput'));
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-city">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            name="city"
            value={cityInput}
            onChange={(e) => {
              dispatch(changeEditProfileInput(e.target.value, 'cityInput'));
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-birthdate">
          <label htmlFor="birthdate">Date de naissance</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdateInput}
            onChange={(e) => {
              dispatch(
                changeEditProfileInput(e.target.value, 'birthdateInput')
              );
            }}
            required
          />
        </div>
        <div className="ProfileEdition-form-bio">
          <label htmlFor="bio">Bio</label>
          <textarea
            type="text"
            id="bio"
            name="bio"
            placeholder="Décrivez-vous en quelques mots..."
            value={bioInput}
            onChange={(e) => {
              dispatch(changeEditProfileInput(e.target.value, 'bioInput'));
            }}
          />
        </div>
        <h3 className="ProfileEdition-form-password">
          Modification de votre mot de passe
        </h3>
        <div className="ProfileEdition-form-oldPassword">
          <label htmlFor="oldPassword">Ancien mot de passe</label>
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={oldPasswordInput}
            onChange={(e) => {
              dispatch(
                changeEditProfileInput(e.target.value, 'oldPasswordInput')
              );
            }}
          />
        </div>
        <div className="ProfileEdition-form-newPassword">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPasswordInput}
            onChange={(e) => {
              dispatch(
                changeEditProfileInput(e.target.value, 'newPasswordInput')
              );
            }}
          />
        </div>
        <div className="ProfileEdition-form-confirmNewPassword">
          <label htmlFor="confirmNewPassword">
            Confirmation du nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={confirmNewPasswordInput}
            onChange={(e) => {
              dispatch(
                changeEditProfileInput(
                  e.target.value,
                  'confirmNewPasswordInput'
                )
              );
            }}
          />
        </div>
        {errorMessage.length > 0 && (
          <div className="ProfileEdition-form-error"> {errorMessage} </div>
        )}
        <button type="submit" className="ProfileEdition-form-submit">
          Enregistrer les modifications
        </button>
        <button
          type="button"
          className="ProfileEdition-form-delete"
          onClick={() => {
            // dispatch(deleteProfile(profileId, navigate));
            setDeleteOpenings(true);
          }}
        >
          Supprimer mon profil
        </button>
        {deleteOpenings && (
          <div className="ProfileEdition-form-delete-window">
            <FiAlertTriangle className="ProfileEdition-form-delete-window-icon" />
            <p>
              Êtes-vous sûr de vouloir supprimer votre profil ? <br /> Cette
              action est irréversible.
            </p>
            <button
              className="confirm"
              type="button"
              onClick={() => {
                dispatch(deleteProfile(profileId, navigate));
              }}
            >
              Oui, je veux supprimer mon profil
            </button>
            <button
              className="delete"
              type="button"
              onClick={() => {
                setDeleteOpenings(false);
              }}
            >
              Annuler
            </button>
          </div>
        )}
      </form>
    </main>
  );
};

export default ProfileEdition;
