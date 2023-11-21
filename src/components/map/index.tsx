import { MapRef, Map as Mapbox, Marker } from 'react-map-gl';
import { INode } from '../../hooks/use-fetch-data';
import { useMemo, useRef } from 'react';

const initialViewState = {
  latitude: 43.7800525,
  longitude: 11.1585671,
  zoom: 5,
  bearing: 0,
  pitch: 50,
};

interface IProps {
  nodes: INode[];
}

export function Map({ nodes }: IProps) {
  const mapRef = useRef<MapRef>(null);

  const pins = useMemo(
    () =>
      nodes.map((node, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={node.longitude}
          latitude={node.latitude}
          // anchor='bottom'
          onClick={(e) => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            // setPopupInfo(city);
          }}
        >
          <div className='bg-white h-[32px] w-[32px] rounded-3xl justify-center items-center flex'>
            <div className='bg-primary-grey h-[20px] w-[20px] rounded-3xl'></div>
          </div>
        </Marker>
      )),
    [nodes]
  );
  return (
    <Mapbox
      ref={mapRef}
      mapboxAccessToken='pk.eyJ1IjoicGFzcXVhbGludG9zaCIsImEiOiJja2Iwa2psZmQwNjNzMzJsb2xmY3o2b2ZoIn0.6ccSNdFNwtU0NWqKFM3VXQ'
      style={{ width: '100%', height: '100vh' }}
      initialViewState={{
        ...initialViewState,
        latitude: nodes[0].latitude,
        longitude: nodes[0].longitude,
      }}
      mapStyle='mapbox://styles/mapbox/dark-v9'
    >
      {pins}
    </Mapbox>
  );
}
