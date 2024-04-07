import { IconContext } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareInstagram,
} from 'react-icons/fa6';

import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
  const isLogged = false;

  return (
    <footer className="Footer">
      <div className="Footer-main">
        <div className="Footer-main-socials">
          <Link to="/">
            <div className="Footer-main-socials-logoContainer">
              <img
                className="Footer-main-socials-logoContainer-logo"
                src="/src/assets/Logo_BW.svg"
                alt="Logo de WePeak"
              />
            </div>
          </Link>
          <p className="Footer-main-socials-message">
            Explorez, partagez et découvrez de nouvelles aventures outdoor avec
            WePeak.
          </p>
          <ul className="Footer-main-socials-logos">
            <li>
              <Link to="https://www.facebook.com/" target="_blank">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaSquareFacebook />
                </IconContext.Provider>
              </Link>
            </li>
            <li>
              <Link to="https://www.twitter.com/" target="_blank">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaSquareXTwitter />
                </IconContext.Provider>
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/" target="_blank">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaSquareInstagram />
                </IconContext.Provider>
              </Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/" target="_blank">
                <IconContext.Provider value={{ size: '1.5rem' }}>
                  <FaLinkedin />
                </IconContext.Provider>
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer-main-account">
          <nav className="Footer-main-account-list">
            <li>
              <h4>Account</h4>
            </li>
            <li>
              <Link to="/register">Inscription</Link>
            </li>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to={isLogged ? '/profile' : '/login'}>Profil</Link>
            </li>
          </nav>
        </div>

        <div className="Footer-main-wepeak">
          <nav className="Footer-main-wepeak-list">
            <li>
              <Link to="/">
                <h4>WePeak</h4>
              </Link>
            </li>
            <li>
              <Link to="/about">&#xC0; propos</Link>
            </li>
            <li>
              <Link to="/contact">Nous contacter</Link>
            </li>
            <li>
              <Link to="/legal-notices">Mentions légales</Link>
            </li>
            <li>
              <Link to="/privacy">Confidentialité</Link>
            </li>
          </nav>
        </div>
      </div>

      <div className="Footer-bottom">
        <p className="Footer-bottom-text">
          Copyright &copy; {new Date().getFullYear()} WePeak | Tout droit
          réservé
        </p>
      </div>
    </footer>
  );
};

export default Footer;
