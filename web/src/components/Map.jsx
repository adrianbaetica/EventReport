import React, { useState } from "react";
import ReactMapGL, {Marker} from "react-map-gl";

import CustomButton from './CustomButton.jsx'

const Map = ({events}) => {
  const [viewport, setViewport] = useState({
    latitude: 44.439663,
    longitude: 26.096306,
    width: "70vw",
    height: "75vh",
    zoom: 13
  });

  const eventMarkers = events.map(event => {
    return ( 
      <Marker key = {event.id} latitude={event.lat} longitude={event.long}> 
          <CustomButton event={event}/>
      </Marker>
    );
  });
    
  return (
    <div>
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken="pk.eyJ1IjoiYWRpYjE0IiwiYSI6ImNrazc3M3hpNzA5enEyeG8yd3J6ZDMyOXkifQ.aaJmJI5oUkX-n-l7hZN6eA"
        onViewportChange = {viewport => {
          setViewport(viewport);
        }} 
      >
        {eventMarkers}
      </ReactMapGL>
    </div>
  );
}

export default Map;
