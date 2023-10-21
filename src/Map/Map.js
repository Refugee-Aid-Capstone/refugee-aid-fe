import {useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup , useMap} from 'react-leaflet';

import './Map.scss'
import MapController from './MapController';

export default function Map({latitude, longitude}) {
  

  return (
    <div className='leaflet-container'>
      <MapContainer  center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <MapController latLon={[latitude,longitude]} />
        <Marker position={[latitude, longitude]}>
          <Popup>
            this popup needs info
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
