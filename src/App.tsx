import {
  BottomSection,
  Expand,
  ExpandWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  Map,
  Panel,
  Pin,
  Separator,
  Submit,
} from "./components";
import { Landing } from "./components/landing";

export default function App() {
  // localhost:3000/api/v1/nodes -> overall map nodes
  // localhost:3000/api/v1/trips  -> given two endpoints, returns a restricted "nodes" array
  /*
  {
        "id": 1,
        "name": "Agrigento",
        "latitude": 37.3,
        "longitude": 13.6
    },
  */
  return (
    <div>
      <Map />
      <Panel>
        <InputWrapper>
          <IconWrapper>
            <div className="bg-white w-[10px] h-[10px] rounded-3xl"></div>
          </IconWrapper>
          <Input placeholder="Starting point" />
        </InputWrapper>

        <Separator />

        <InputWrapper>
          <IconWrapper>
            <Pin />
          </IconWrapper>
          <Input placeholder="Arrival point" />
        </InputWrapper>

        <Separator isShowingBorder={false} />

        <InputWrapper>
          <div className="bg-transparent h-5 w-5" />
          <Submit placeholder="Go!" value={"Go!"} />
        </InputWrapper>

        <BottomSection
          stop={20}
          stops={["Ancona", "Agrigiento", "Firenze", "Roma"]}
          km="15"
        >
          <ExpandWrapper>
            <Expand />
          </ExpandWrapper>
        </BottomSection>
      </Panel>
      <Landing />
      <div className="absolute top-[172px] left-[30px] w-[40vw] h-[60vh] bg-primary-default rounded-lg">
        {/* <input
          type='text'
          className='border-gray-200 border-1 rounded-2xl bg-primary-default'
        /> */}
      </div>
    </div>
  );
}
