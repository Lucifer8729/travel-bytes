import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import makeStyles from "./styles";

const Map = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYW5pa2V0MDkyMCIsImEiOiJja3MwazhpbGgxa3Q2Mm5xajFkbmt0ODhiIn0.VFl6j_3sd6zWE54_v3f14A";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={makeStyles.mapContainer} />
    </div>
  );
};

export default Map;
