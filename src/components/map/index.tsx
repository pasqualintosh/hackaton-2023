import {
  Layer,
  MapRef,
  Map as Mapbox,
  Marker,
  Popup,
  Source,
} from "react-map-gl";
import { INode } from "../../hooks/use-fetch-data";
import { useMemo, useRef, useState } from "react";
import { DestinationPoint, StartPoint } from "..";
import useFetchTrips from "../../hooks/use-fetch-trips";

export const layer = {
  type: "line",
  source: "route",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "blue",
    "line-width": 8,
  },
};

const initialViewState = {
  latitude: 41.926667,
  longitude: 8.736944,
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
  id: number;
  type: "start" | "end";
  label: string;
  latitude: number;
  longitude: number;
}
function PopupContent({ type, label }: IPopupProps) {
  return (
    <div className="bg-white rounded-xl justify-center items-center px-1">
      <div className="flex flex-row justify-center items-center">
        <div className="mr-5">
          {type === "start" ? <StartPoint /> : <DestinationPoint />}
        </div>
        <div className="">
          <p className="font-semibold text-md text-primary-grey">
            {type === "start" ? "Starting point" : "Destination"}
          </p>
          <p className="font-semibold text-xs ">{label}</p>
        </div>
      </div>
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
  const canFetch = !!popupA && !!popupB;
  const mapRef = useRef<MapRef>(null);

  const { fetchTripsState } = useFetchTrips(popupA?.id, popupB?.id, canFetch);
  const { result } = fetchTripsState;

  const pins = useMemo(
    () =>
      nodes.map((node, index) => {
        const isStartPoint =
          node.latitude === popupA?.latitude &&
          node.longitude === popupA?.longitude;

        const isDestinationPoint =
          node.latitude === popupB?.latitude &&
          node.longitude === popupB?.longitude;

        const isSelected = isStartPoint || isDestinationPoint;

        return (
          <Marker
            key={`marker-${index}`}
            longitude={node.longitude}
            latitude={node.latitude}
            anchor="top"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              if (!popupA) {
                start(node.name);
                setPopupA({
                  id: node.id,
                  type: "start",
                  latitude: node.latitude,
                  longitude: node.longitude,
                  label: node.name,
                });
              } else {
                console.log("aa");
                destination(node.name);
                setPopupB({
                  id: node.id,
                  type: "end",
                  latitude: node.latitude,
                  longitude: node.longitude,
                  label: node.name,
                });
              }
            }}
          >
            <div
              className={`bg-white h-[32px] w-[32px] rounded-3xl justify-center items-center flex ${
                isSelected ? " shadow-2xl shadow-[#ffffff80]" : ""
              }`}
            >
              <div className="bg-primary-grey h-[20px] w-[20px] rounded-3xl"></div>
            </div>
          </Marker>
        );
      }),
    [destination, nodes, popupA, popupB, start]
  );

  const close = () => {
    setPopupA(undefined);
    setPopupB(undefined);
    start("");
    destination("");
    setShowRoute(false);
  };
  return (
    <Mapbox
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1IjoicGFzcXVhbGludG9zaCIsImEiOiJja2Iwa2psZmQwNjNzMzJsb2xmY3o2b2ZoIn0.6ccSNdFNwtU0NWqKFM3VXQ"
      style={{ width: "100%", height: "100vh" }}
      initialViewState={{
        ...initialViewState,
        latitude: 43.7799286,
        longitude: 11.1585676,
      }}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      {pins}
      {showRoute && !!popupB && (
        <Source
          type="geojson"
          data={{
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates:
                result?.nodes?.map((el) => [el?.longitude, el?.latitude]) || [],
            },
          }}
        >
          <Layer {...layer} />
        </Source>
      )}

      {popupA && (
        <Popup
          anchor="center"
          longitude={Number(popupA.longitude)}
          latitude={Number(popupA.latitude)}
          onClose={close}
        >
          <PopupContent
            id={popupA?.id}
            type={popupA?.type}
            label={popupA?.label}
            latitude={0}
            longitude={0}
          />
        </Popup>
      )}
      {popupB && (
        <Popup
          anchor="top"
          longitude={Number(popupB.longitude)}
          latitude={Number(popupB.latitude)}
          onClose={close}
        >
          <PopupContent
            id={popupB?.id}
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
