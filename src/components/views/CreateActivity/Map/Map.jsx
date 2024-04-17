import { useSelector, useDispatch } from 'react-redux';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { fetchAdressFromCoordinates } from '../../../../actions/activityActions';

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
