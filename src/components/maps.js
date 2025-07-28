import React, { useState } from "react";
import {Map, Marker} from "@vis.gl/react-google-maps"
import './css/maps.css'

const GoogleMaps = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 10.35049768328454,
    lng: 123.94889551141046
  });

  return (
    <div className="map-container">
      <Map
        defaultZoom={19}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
}

export default GoogleMaps;