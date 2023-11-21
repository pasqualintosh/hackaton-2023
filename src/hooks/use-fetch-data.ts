import { useEffect, useState } from 'react';

const mockNodes = [
  {
    id: 1,
    name: 'Agrigento',
    latitude: 37.3,
    longitude: 13.6,
  },
  {
    id: 2,
    name: 'Alessandria',
    latitude: 44.9167,
    longitude: 8.6167,
  },
  {
    id: 3,
    name: 'Ancona',
    latitude: 43.6167,
    longitude: 13.5167,
  },
  {
    id: 4,
    name: 'Aosta',
    latitude: 45.7333,
    longitude: 7.3167,
  },
  {
    id: 5,
    name: 'Arezzo',
    latitude: 43.4667,
    longitude: 11.8833,
  },
  {
    id: 6,
    name: 'Ascoli Piceno',
    latitude: 42.85,
    longitude: 13.5667,
  },
  {
    id: 7,
    name: 'Asti',
    latitude: 44.8833,
    longitude: 8.2,
  },
  {
    id: 8,
    name: 'Avellino',
    latitude: 40.9167,
    longitude: 14.7833,
  },
  {
    id: 9,
    name: 'Bari',
    latitude: 41.1167,
    longitude: 16.8833,
  },
  {
    id: 10,
    name: 'Lauria',
    latitude: 40.0524,
    longitude: 15.8343,
  },
  {
    id: 11,
    name: 'Belluno',
    latitude: 46.1333,
    longitude: 12.2167,
  },
  {
    id: 12,
    name: 'Benevento',
    latitude: 41.1333,
    longitude: 14.7667,
  },
  {
    id: 13,
    name: 'Bergamo',
    latitude: 45.7,
    longitude: 9.6667,
  },
];

export const mockRoute = [
  {
    id: 7,
    name: 'Asti',
    latitude: 44.8833,
    longitude: 8.2,
  },
  {
    id: 13,
    name: 'Bergamo',
    latitude: 45.7,
    longitude: 9.6667,
  },
];

export interface INode {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

// interface IEdge {
//   source: number;
//   target: number;
//   cost: number;
// }

const NODES = '0368-188-12-233-183.ngrok-free.app/api/v1/nodes';

interface IState {
  isLoading: boolean;
  isError: boolean;
  nodes: INode[];
}

const initialState: IState = {
  isLoading: false,
  isError: false,
  nodes: mockNodes,
};

export default function useFetchNodes() {
  const [fetchNodesState, setFetchNodesState] = useState<IState>(initialState);

  useEffect(() => {
    // fetchNodes();
  }, []);

  const fetchNodes = async () => {
    const options = {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': 'true',
        'content-type': 'application/json',
        accept: '*/*',
        'User-Agent': 'insomnia/8.4.2',
      },
    };
    setFetchNodesState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const response = await fetch(NODES, options);
    if (!response.ok) {
      setFetchNodesState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
      console.error('Network response was not ok');
    }
    const nodes = await response.json();

    setFetchNodesState((prevState) => ({
      ...prevState,
      isError: false,
      isLoading: false,
      nodes: (nodes as unknown as INode[]) || [],
    }));
  };

  return { fetchNodesState };
}
