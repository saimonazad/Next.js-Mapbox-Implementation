//import lib
import React, { useState } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ";

//main func
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};

export default Map;
