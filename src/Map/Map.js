import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

import './Map.scss';
import MapController from './MapController';

export default function Map({
  latitude,
  longitude,
  selectedOrganization,
  shareAddress,
}) {
  const { city, state, streetAddress, zip } = selectedOrganization;

  return (
    <div className='leaflet-container'>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapController latLon={[latitude, longitude]} />
        {shareAddress ? (
          <Marker position={[latitude, longitude]}>
            <Popup>
              {streetAddress}, {city}, {state} {zip}
            </Popup>{' '}
          </Marker>
        ) : (
          <Circle
            center={[latitude, longitude]}
            pathOptions={{ fillColor: 'blue' }}
            radius={500}
          />
        )}
      </MapContainer>
    </div>
  );
}
