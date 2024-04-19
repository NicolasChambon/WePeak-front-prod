// Import necessary librairies
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiArrowUpRight } from 'react-icons/fi';

// Import actions
import {
  changeRegisterInput,
  postRegisterForm,
} from '../../../actions/registerActions';

// Import stylesheet and logo
import './Register.scss';
import logo from '../../../assets/favicon.png';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isVisibile, setIsVisible] = useState(false);

  const errorMessage = useSelector((state) => state.register.errorMessage);

  const date = new Date();

  return (
    <main className="Register">
      <div className="Register-content">
        <Link to="/">
          <img src={logo} alt="Logo WePeak" className="Register-content-logo" />
        </Link>
        <h1 className="Register-content-title">Inscription</h1>
        <p className="Register-content-register">
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className="Register-content-register-link">
            Se connecter
          </Link>
        </p>
        <form
          className="Register-content-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postRegisterForm(navigate));
          }}
        >
          <div className="Register-content-form-wrapper">
            <div className="Register-content-form-wrapper-row">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                onChange={(e) => {
                  dispatch(
                    changeRegisterInput(e.target.value, 'firstnameInput')
                  );
                }}
                required
              />
            </div>
            <div className="Register-content-form-wrapper-row">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={(e) => {
                  dispatch(
                    changeRegisterInput(e.target.value, 'lastnameInput')
                  );
                }}
                required
              />
            </div>
          </div>
          <label htmlFor="username">Nom d&apos;utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => {
              dispatch(changeRegisterInput(e.target.value, 'usernameInput'));
            }}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              dispatch(changeRegisterInput(e.target.value, 'emailInput'));
            }}
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <div className="Register-content-form-password">
            <input
              type={isVisibile ? 'text' : 'password'}
              id="password"
              name="password"
              className="Register-content-form-password-input"
              onChange={(e) => {
                dispatch(changeRegisterInput(e.target.value, 'passwordInput'));
              }}
              required
            />
            <i className="Register-content-form-password-icon">
              {isVisibile ? (
                <FiEye onClick={() => setIsVisible(!isVisibile)} />
              ) : (
                <FiEyeOff onClick={() => setIsVisible(!isVisibile)} />
              )}
            </i>
          </div>

          <div className="Register-content-form-wrapper">
            <div className="Register-content-form-wrapper-row">
              <label htmlFor="city">Ville</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={(e) => {
                  dispatch(changeRegisterInput(e.target.value, 'cityInput'));
                }}
                required
              />
            </div>
            <div className="Register-content-form-wrapper-row">
              <label htmlFor="birthdate">Date de naissance</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                onChange={(e) => {
                  dispatch(
                    changeRegisterInput(e.target.value, 'birthdateInput')
                  );
                }}
                required
                max={date.toISOString().split('T')[0]}
              />
            </div>
          </div>
          <fieldset className="Register-content-form-age">
            <legend>Âge</legend>
            <div className="Register-content-form-age-wrapper">
              <input
                type="checkbox"
                id="age"
                name="age"
                onChange={(e) => {
                  dispatch(changeRegisterInput(e.target.checked, 'ageInput'));
                }}
                required
              />
              <label htmlFor="age">
                Je certifie avoir plus de 18 ans et accepte les conditions
                générales d&apos;utilisation.
              </label>
            </div>
          </fieldset>
          {errorMessage.length > 0 && (
            <div className="Register-content-form-error"> {errorMessage} </div>
          )}
          <button type="submit">S&apos;inscrire</button>
        </form>
      </div>
      <Link to="/" className="Register-exit">
        Retour à l&apos;accueil
        <FiArrowUpRight />
      </Link>
    </main>
  );
};

export default Register;
