import { Link } from 'react-router-dom';

import './CtaBanner.scss';
import Button from '../../../utils/Button/Button';

import image from '../../../../assets/images/Home_hero_6.avif';

const CtaBanner = () => {
  return (
    <div className="CtaBanner">
      <div className="CtaBanner-left">
        <h2 className="CtaBanner-left-title">
          Vous souhaitez nous rejoindre ?
        </h2>
        <p className="CtaBanner-left-text">
          Inscrivez-vous dès maintenant pour participer à nos évènements et
          échanger avec les autres membres de la communauté.
        </p>
        <div className="CtaBanner-left-buttons">
          <Button text="S'inscrire" className="accent" url="/register" />
          <Button text="En savoir plus" className="secondary" url="/about" />
        </div>
      </div>
      <div className="CtaBanner-right">
        <img src={image} alt="" className="CtaBanner-right-image" />
      </div>
    </div>
  );
};

export default CtaBanner;
