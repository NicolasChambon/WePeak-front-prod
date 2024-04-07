import Button from '../../../utils/Button/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-content">
        <h1 className="Hero-content-title">
          Partagez et découvrez de nouvelles aventures !
        </h1>
        <p className="Hero-content-description">
          Explorez ensemble de nouveaux horizons et partagez des expériences
          inoubliables avec la communauté WePeak !
        </p>
        <div className="Hero-content-buttons">
          <Button
            text="Trouver une activité"
            className="primary"
            url="/activities"
          />
          <Button text="En savoir plus" className="secondary" url="/about" />
        </div>
      </div>
      <div className="Hero-gallery">
        <img
          src="/src/assets/images/Home_hero_1.avif"
          alt="resort skiing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_2.avif"
          alt="cross biking"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_3.avif"
          alt="backcountry skiing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_4.avif"
          alt="surfing"
          className="Hero-gallery-image"
        />
        <img
          src="/src/assets/images/Home_hero_5.avif"
          alt="hiking"
          className="Hero-gallery-image"
        />
      </div>
    </div>
  );
};

export default Hero;
