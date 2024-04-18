// Import necessary libaries and dependencies
import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';

// Import actions
import { fetchAdressFromCoordinates } from '../../../../actions/activityActions';

// Import styles and assets
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import markerIcon from '../../../../assets/marker-icon.svg';

const Map = () => {
  const dispatch = useDispatch();
  const searchedCity = useSelector((state) => state.search.searchedCity);
  const markerPosition = useSelector(
    (state) => state.activity.activityAdress.coordinates
  );
  const markerCoordinates = [
    markerPosition[0] || searchedCity.lat,
    markerPosition[2] || searchedCity.lng,
  ];

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
    <MapContainer
      className="map-container"
      center={markerCoordinates}
      zoom={15}
    >
      <ChangeView center={markerCoordinates} zoom={15} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={markerCoordinates}
        draggable="true"
        icon={customIcon}
        eventHandlers={{
          dragend: (e) => {
            dispatch(
              fetchAdressFromCoordinates(e.target.getLatLng(), 'CreateActivity')
            );
          },
        }}
      />
    </MapContainer>
  );
};

export default Map;
