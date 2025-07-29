import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import './css/maps.css'

const MapView = () => {
  const pos = [10.350497683276995, 123.94884186760771];
    return (
    <div className="leaflet-container">
      <MapContainer center={pos} zoom={19} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>
            Cafe Del Rey<br/>
            Insular Square Mall, Mandaue, 6014 Cebu, Philippines
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;