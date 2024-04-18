// Import necessary libraries
import { TbClockHour8 } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';

// Import styles and assets
import 'leaflet/dist/leaflet.css';
import './ActivityIllustration.scss';
import markerIcon from '../../../../assets/marker-icon.svg';

const ActivityIllustration = ({
  date,
  adressNumber,
  adressRoad,
  adressPostcode,
  adressCity,
  lat,
  lng,
  thumbnail,
}) => {
  // allow to change the view of the map if user change activity page
  // then we integrate <ChangeView /> component in the map in jsx part
  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
    // Point of the icon which will correspond to marker's location
    iconAnchor: [16, 32],
  });

  return (
    <div className="ActivityIllustration">
      <div className="ActivityIllustration-imgContainer">
        <img src={thumbnail} alt="" />
      </div>

      <div className="ActivityIllustration-mapCard">
        <div className="ActivityIllustration-mapCard-info">
          <div className="ActivityIllustration-mapCard-info-date">
            <TbClockHour8 className="ActivityIllustration-mapCard-info-date icon" />
            <p>
              <span>Date et heure de départ</span> <br />{' '}
              {new Date(date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
              })}
            </p>
          </div>

          <div className="ActivityIllustration-mapCard-info-location">
            <HiOutlineLocationMarker className="ActivityIllustration-mapCard-info-location icon" />
            <p>
              <span>Lieu de rendez-vous</span> <br /> {adressNumber}{' '}
              {adressRoad} <br /> {adressPostcode} {adressCity}
            </p>
          </div>
        </div>

        <div className="ActivityIllustration-mapCard-map">
          <MapContainer className="map-container" center={[lat, lng]} zoom={15}>
            <ChangeView center={[lat, lng]} zoom={15} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={customIcon} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

ActivityIllustration.propTypes = {
  date: PropTypes.string.isRequired,
  adressNumber: PropTypes.string,
  adressRoad: PropTypes.string.isRequired,
  adressPostcode: PropTypes.string.isRequired,
  adressCity: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

ActivityIllustration.defaultProps = {
  adressNumber: '',
};

export default ActivityIllustration;
