// Import necessary librairies
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff, FiArrowUpRight } from 'react-icons/fi';

// Import actions
import { changeLoginInput, postLoginForm } from '../../../actions/userActions';

// Import stylesheet and logo
import './Login.scss';
import logo from '../../../assets/favicon.png';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisibile, setIsVisible] = useState(false);

  const errorMessage = useSelector((state) => state.user.loginErrorMessage);

  return (
    <main className="Login">
      <div className="Login-content">
        <NavLink to="/">
          <img src={logo} alt="Logo WePeak" className="Login-content-logo" />
        </NavLink>
        <h1 className="Login-content-title">Connexion</h1>
        <p className="Login-content-register">
          Vous n&apos;avez pas de compte ?{' '}
          <NavLink to="/register" className="Login-content-register-link">
            S&apos;inscrire
          </NavLink>
        </p>
        <form
          className="Login-content-form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(postLoginForm(navigate));
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              dispatch(changeLoginInput(e.target.value, 'emailInputLogin'));
            }}
            required
          />
          <div className="Login-content-form-wrapper">
            <label htmlFor="password">Mot de passe</label>
            <Link
              to="/forgot-password"
              className="Login-content-form-wrapper-link"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <div className="Login-content-form-password">
            <input
              type={isVisibile ? 'text' : 'password'}
              id="password"
              name="password"
              className="Login-content-form-password-input"
              onChange={(e) => {
                dispatch(
                  changeLoginInput(e.target.value, 'passwordInputLogin')
                );
              }}
              required
            />
            <i className="Login-content-form-password-icon">
              {isVisibile ? (
                <FiEye onClick={() => setIsVisible(!isVisibile)} />
              ) : (
                <FiEyeOff onClick={() => setIsVisible(!isVisibile)} />
              )}
            </i>
          </div>
          {errorMessage.length > 0 && (
            <div className="Login-content-form-error"> {errorMessage} </div>
          )}
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <NavLink to="/" className="Login-content-exit">
        Retour à l&apos;accueil
        <FiArrowUpRight />
      </NavLink>
    </main>
  );
};

export default Login;
