import * as React from "react";

interface INode {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
interface IEdge {
  source: number;
  target: number;
  cost: number;
}

interface ResultNode {
  nodes: INode[];
  edges: IEdge[];
  distance: string;
  stops: string[];
}

const NODES = "https://0368-188-12-233-183.ngrok-free.app/api/v1/trips";

interface IState {
  isLoading: boolean;
  isError: boolean;
  result: ResultNode | null;
}

const initialState: IState = {
  isLoading: false,
  isError: false,
  result: null,
};

export default function useFetchTrips(
  sourceId: number | undefined,
  targetId: number | undefined,
  canFetch: boolean
) {
  const [fetchTripsState, setFetchTripsState] =
    React.useState<IState>(initialState);

  React.useEffect(() => {
    if (!sourceId || !targetId || !canFetch) return;
    fetchTrip();
  }, [sourceId, targetId, canFetch]);

  const fetchTrip = async () => {
    const options = {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
        "content-type": "application/json",
        accept: "application/json",
      },
    };
    setFetchTripsState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const response = await fetch(
      `${NODES}?source_id=${sourceId}&target_id=${targetId}`,
      options
    );
    if (!response.ok) {
      setFetchTripsState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
      console.error("Network response was not ok");
    }
    const result = await response.json();

    setFetchTripsState((prevState) => ({
      ...prevState,
      isError: false,
      isLoading: false,
      result: (result as unknown as ResultNode) || null,
    }));
  };

  return { fetchTripsState };
}
