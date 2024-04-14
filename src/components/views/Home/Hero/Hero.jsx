import Button from '../../../utils/Button/Button';
import './Hero.scss';

import image1 from '../../../../assets/images/Home_hero_1.avif';
import image2 from '../../../../assets/images/Home_hero_2.avif';
import image3 from '../../../../assets/images/Home_hero_3.avif';
import image4 from '../../../../assets/images/Home_hero_4.avif';
import image5 from '../../../../assets/images/Home_hero_5.avif';

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
        <img src={image1} alt="resort skiing" className="Hero-gallery-image" />
        <img src={image2} alt="cross biking" className="Hero-gallery-image" />
        <img
          src={image3}
          alt="backcountry skiing"
          className="Hero-gallery-image"
        />
        <img src={image4} alt="surfing" className="Hero-gallery-image" />
        <img src={image5} alt="hiking" className="Hero-gallery-image" />
      </div>
    </div>
  );
};

export default Hero;
