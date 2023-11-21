import {
  Layer,
  MapRef,
  Map as Mapbox,
  Marker,
  Popup,
  Source,
} from 'react-map-gl';
import { INode, mockRoute } from '../../hooks/use-fetch-data';
import { useMemo, useRef, useState } from 'react';

export const layer = {
  id: 'route',
  type: 'line',
  source: 'route',
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': 'blue',
    'line-width': 8,
  },
};

const initialViewState = {
  latitude: 43.7800525,
  longitude: 11.1585671,
  zoom: 5,
  bearing: 0,
  pitch: 0,
};

interface IProps {
  nodes: INode[];
  start: React.Dispatch<React.SetStateAction<string>>;
  destination: React.Dispatch<React.SetStateAction<string>>;
  showRoute: boolean;
  setShowRoute: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IPopupProps {
  type: 'start' | 'end';
  label: string;
  latitude: number;
  longitude: number;
}
function PopupContent({ type, label }: IPopupProps) {
  return (
    <div className='bg-white rounded-md justify-center items-center'>
      <p>{type === 'start' ? 'Starting point' : 'Destination'}</p>
      <p>{label}</p>
    </div>
  );
}

export function Map({
  nodes,
  start,
  destination,
  showRoute,
  setShowRoute,
}: IProps) {
  const [popupA, setPopupA] = useState<IPopupProps | undefined>(undefined);
  const [popupB, setPopupB] = useState<IPopupProps | undefined>(undefined);
  const mapRef = useRef<MapRef>(null);

  const route = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [popupA?.longitude, popupA?.latitude],
        [popupB?.longitude, popupB?.latitude],
      ],
    },
  };

  const pins = useMemo(
    () =>
      nodes.map((node, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={node.longitude}
          latitude={node.latitude}
          anchor='top'
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            if (!popupA) {
              start(node.name);
              setPopupA({
                type: 'start',
                latitude: node.latitude,
                longitude: node.longitude,
                label: node.name,
              });
            } else {
              console.log('aa');
              destination(node.name);
              setPopupB({
                type: 'end',
                latitude: node.latitude,
                longitude: node.longitude,
                label: node.name,
              });
            }
          }}
        >
          <div className='bg-white h-[32px] w-[32px] rounded-3xl justify-center items-center flex'>
            <div className='bg-primary-grey h-[20px] w-[20px] rounded-3xl'></div>
          </div>
        </Marker>
      )),
    [destination, nodes, popupA, popupB, start]
  );

  const close = () => {
    setPopupA(undefined);
    setPopupB(undefined);
    start('');
    destination('');
    setShowRoute(false);
  };

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
      {showRoute && !!popupB && (
        <Source type='geojson' data={route}>
          <Layer {...layer} />
        </Source>
      )}

      {popupA && (
        <Popup
          anchor='center'
          longitude={Number(popupA.longitude)}
          latitude={Number(popupA.latitude)}
          onClose={close}
        >
          <PopupContent
            type={popupA.type}
            label={popupA.label}
            latitude={0}
            longitude={0}
          />
        </Popup>
      )}
      {popupB && (
        <Popup
          anchor='top'
          longitude={Number(popupB.longitude)}
          latitude={Number(popupB.latitude)}
          onClose={close}
        >
          <PopupContent
            type={popupB.type}
            label={popupB.label}
            latitude={0}
            longitude={0}
          />
        </Popup>
      )}
    </Mapbox>
  );
}
