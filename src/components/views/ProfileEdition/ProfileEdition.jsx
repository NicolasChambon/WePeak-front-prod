import { useState } from 'react';

import './ProfileEdition.scss';

const ProfileEdition = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    // we get the first file selected by the user from the input
    const file = e.target.files[0];

    if (file) {
      // FileReader is a built-in browser API that allows to read files
      const reader = new FileReader();
      // We setup an event listener. onloadend is an event that is triggered when the file has been read.
      reader.onloadend = () => {
        // reader.result contains the file content in a data URL format (base64)
        setImage(reader.result);
        console.log(reader.result);
      };
      // readAsDataURL will read the file and transform it to a data URL.
      // At the end, the onloadend event will be triggered.
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="ProfileEdition">
      <h2 className="ProfileEdition-title">Modification de votre profil</h2>
      <form action="submit" className="ProfileEdition-form">
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
            onChange={handleImageChange}
            className="ProfileEdition-form-picture-input"
          />
        </div>
        <div className="ProfileEdition-form-firstname">
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value="Tom"
            required
          />
        </div>
        <div className="ProfileEdition-form-name">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" value="Fourage" required />
        </div>
        <div className="ProfileEdition-form-username">
          <label htmlFor="username">Nom d&apos;utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value="bogossdu40"
            required
          />
        </div>
        <div className="ProfileEdition-form-email">
          <label htmlFor="email">Adresse email</label>
          <input
            type="text"
            id="email"
            name="email"
            value="tom.fourage.dev@gmail.com"
            required
          />
        </div>
        <div className="ProfileEdition-form-city">
          <label htmlFor="city">Ville</label>
          <input type="text" id="city" name="city" value="Seignosse" required />
        </div>
        <div className="ProfileEdition-form-birthdate">
          <label htmlFor="birthdate">Date de naissance</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value="22/03/1991"
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
            value=""
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
            value="oldpassword"
            required
          />
        </div>
        <div className="ProfileEdition-form-newPassword">
          <label htmlFor="newPassword">Nouveau mot de passe</label>
          <input type="password" id="newPassword" name="newPassword" value="" />
        </div>
        <div className="ProfileEdition-form-confirmNewPassword">
          <label htmlFor="confirmNewPassword">
            Confirmation du nouveau mot de passe
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value=""
          />
        </div>
        <button type="submit" className="ProfileEdition-form-submit">
          Enregistrer les modifications
        </button>
        <button type="button" className="ProfileEdition-form-delete">
          Supprimer mon profil
        </button>
      </form>
    </main>
  );
};

export default ProfileEdition;
