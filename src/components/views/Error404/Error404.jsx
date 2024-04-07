import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Error404.scss';

const Error404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const imgNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <main className="Error404">
      <div className="Error404-imgContainer">
        <img src={`/src/assets/images/image_404_${imgNumber}.jpg`} alt="" />
      </div>
      <div className="Error404-right">
        <h2 className="Error404-right-title">404</h2>
        <p className="Error404-right-subtitle">
          Outch !<br />
          Page non trouvée
        </p>
        <p className="Error404-right-text">
          Manifestement vous êtes sorti des sentiers battus. <br /> Nous vous
          invitons à retourner à l&apos;accueil.
        </p>
        <Link to="/" className="Error404-right-homeBtn">
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
};

export default Error404;
