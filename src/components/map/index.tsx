import { Map as Mapbox } from "react-map-gl";

const initialViewState = {
  latitude: 43.7800525,
  longitude: 11.1585671,
  zoom: 5,
  bearing: 0,
  pitch: 50,
};

export function Map() {
  return (
    <Mapbox
      mapboxAccessToken="pk.eyJ1IjoicGFzcXVhbGludG9zaCIsImEiOiJja2Iwa2psZmQwNjNzMzJsb2xmY3o2b2ZoIn0.6ccSNdFNwtU0NWqKFM3VXQ"
      style={{ width: "100%", height: "100vh" }}
      initialViewState={initialViewState}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    />
  );
}
