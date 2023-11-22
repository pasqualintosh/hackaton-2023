import { useState } from "react";
import { Map } from "./components";
import { Landing } from "./components/landing";
import useFetchNodes from "./hooks/use-fetch-data";

export default function App() {
  /* onst [isExpandMode, setIsExpandMode] = useState(false);
  const [fetchedEdges, setFetchedEdges] = useState<{
    stop: number;
    stops: string[];
    km: string;
  }>(); */
  const { fetchNodesState } = useFetchNodes();
  const { isLoading, nodes } = fetchNodesState;
  /* const [start, setStart] = useState("");
  const [destination, setDestination] = useState(""); */
  const [showRoute, setShowRoute] = useState(false);
  if (isLoading) return <>loading</>;
  return (
    <div>
      <Map
        nodes={nodes}
        /* start={setStart}
        destination={setDestination} */
        showRoute={showRoute}
        setShowRoute={setShowRoute}
        /*  callbackDataFetched={(result) => {
          setFetchedEdges({
            stop: result.stop,
            stops: result.stops,
            km: result.km,
          });
        }} */
      />
      {/* <Panel isFullscreen={isExpandMode}>
        {isExpandMode && (
          <CloseWrapper press={() => setIsExpandMode(false)}>
            <Close />
          </CloseWrapper>
        )}
        <ContentWrapper>
          <LeftWrapper>
            <IconWrapper>
              <div className="bg-white w-[10px] h-[10px] rounded-3xl"></div>
            </IconWrapper>
            <Dots />
            <IconWrapper>
              <Pin />
            </IconWrapper>
          </LeftWrapper>
          <div>
            <InputWrapper>
              <Input placeholder="Starting point" value={start} />
            </InputWrapper>

            <Separator />

            <InputWrapper>
              <Input placeholder="Arrival point" value={destination} />
            </InputWrapper>
          </div>
        </ContentWrapper>

        <Separator />

        <ContentWrapper>
          <LeftWrapper>
            <EmptyWrapper />
          </LeftWrapper>
          <div>
            <InputWrapper>
              <Submit
                placeholder="Go!"
                value={"Go!"}
                onClick={() => setShowRoute(true)}
              />
            </InputWrapper>
          </div>
        </ContentWrapper>

        {!isExpandMode && (
          <div
            className="absolute top-[18px] right-[30px]"
            onClick={() => setIsExpandMode(!isExpandMode)}
          >
            <FullScreen />
          </div>
        )}

        <BottomSection
          stop={fetchedEdges?.stop || 0}
          stops={fetchedEdges?.stops || []}
          km={fetchedEdges?.km || ""}
          isFullscreen={isExpandMode}
        />
      </Panel> */}
      <Landing />
    </div>
  );
}
