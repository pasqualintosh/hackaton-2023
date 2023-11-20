import { Map as Mapbox } from 'react-map-gl';

function Map() {
  return (
    <Mapbox
      mapboxAccessToken='pk.eyJ1IjoicGFzcXVhbGludG9zaCIsImEiOiJja2Iwa2psZmQwNjNzMzJsb2xmY3o2b2ZoIn0.6ccSNdFNwtU0NWqKFM3VXQ'
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle='mapbox://styles/mapbox/streets-v9'
    />
  );
}

export default Map;
