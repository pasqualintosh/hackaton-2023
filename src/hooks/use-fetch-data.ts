type EndpointType = "nodes" | "trips";

const useFetchData = (endpoint: EndpointType) => {
  window.console.log("endpoint: ", endpoint);
  return null;
};

export { useFetchData };
