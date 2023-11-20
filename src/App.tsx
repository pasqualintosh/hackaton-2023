import { Map } from "./components";
import { Landing } from "./components/landing";

export default function App() {
  return (
    <div>
      <Map />
      <div className="absolute top-[172px] left-[30px] w-[40vw] h-[60vh] bg-primary-default rounded-lg">
        {/* <input
          type='text'
          className='border-gray-200 border-1 rounded-2xl bg-primary-default'
        /> */}
      </div>
      <Landing />
    </div>
  );
}
