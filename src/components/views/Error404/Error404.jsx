import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import image_404_1 from '../../../assets/images/image_404_1.jpg';
import image_404_2 from '../../../assets/images/image_404_2.jpg';
import image_404_3 from '../../../assets/images/image_404_3.jpg';
import image_404_4 from '../../../assets/images/image_404_4.jpg';
import image_404_5 from '../../../assets/images/image_404_5.jpg';

import './Error404.scss';

const Error404 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const images = [
    image_404_1,
    image_404_2,
    image_404_3,
    image_404_4,
    image_404_5,
  ];
  const imgNumber = Math.floor(Math.random() * 5) + 1;
  const selectedImage = images[imgNumber - 1];

  return (
    <main className="Error404">
      <div className="Error404-imgContainer">
        <img src={selectedImage} alt="" />
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
