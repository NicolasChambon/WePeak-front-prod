import Button from '../../../utils/Button/Button';

import './DoubleCta.scss';

const DoubleCta = () => {
  return (
    <div className="DoubleCta">
      <div className="DoubleCta-left">
        <h3 className="DoubleCta-left-title">
          Découvrir les évènements à proximité
        </h3>
        <p className="DoubleCta-left-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at
          ac tempus enim.
        </p>
        <div className="DoubleCta-left-buttons">
          <Button text="S'inscrire" className="secondary" url="/register" />
        </div>
      </div>
      <div className="DoubleCta-right">
        <h3 className="DoubleCta-left-title">
          Envie de collaborer avec WePeak ?
        </h3>
        <p className="DoubleCta-left-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit dolor semper at
          ac tempus enim.
        </p>
        <div className="DoubleCta-left-buttons">
          <Button text="Nous contacter" className="accent" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default DoubleCta;
