//import lib
import React, { useState } from "react";
import ReactMapGL, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useSWR from "swr";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ";

//layer style
const layerStyle = {
  id: "point",
  type: "line",
  paint: {
    "line-color": "#877b59",
    "line-width": 1,
  },
};

//main func
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 2,
    bearing: 0,
    pitch: 0,
  });

  //fetch geojson data
  const { data: geojson, error } = useSWR(
    `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson`
  );

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Source id="my-data" type="geojson" data={geojson}>
        <Layer {...layerStyle} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
