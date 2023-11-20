import {
  IconWrapper,
  Input,
  InputWrapper,
  Map,
  Pin,
  Separator,
  Submit,
} from './components';
import { Landing } from './components/landing';

export default function App() {
  return (
    <div>
      <Map />
      <div className='absolute top-[172px] left-[30px] bg-primary-default rounded-xl  py-14 justify-center items-center'>
        <InputWrapper>
          <IconWrapper>
            <div className='bg-white w-[10px] h-[10px] rounded-3xl'></div>
          </IconWrapper>
          <Input placeholder='Starting point' />
        </InputWrapper>

        <Separator />

        <InputWrapper>
          <IconWrapper>
            <Pin />
          </IconWrapper>
          <Input placeholder='Arrival point' />
        </InputWrapper>

        <Separator isShowingBorder={false} />

        <InputWrapper>
          <div className='bg-transparent h-5 w-5' />
          <Submit placeholder='Go!' value={'Go!'} />
        </InputWrapper>

        <div className=' border-t-[1px] border-[#ffffff20] mt-10 flex-none px-8 pt-8'>
          <p className='text-white font-semibold text-2xl'>20 stops 15 km</p>
          <p className='text-[#ffffff50] text-xs max-w-[266px]'>
            Ancona, Aosta, Arezzo, Ascoli Piceno, Ancona, Aosta, Arezzo, Ascoli
            Piceno, Ancona, Aosta, Arezzo, Ascoli Piceno, Ancona, Aosta.
          </p>
          <div className=' items-end justify-end flex'>
            <div className='bg-primary-grey-button p-3 rounded-3xl w-[65px] justify-center items-center'>
              <p className=' text-[#ffffff70] font-semibold text-xs text-center'>
                Expand
              </p>
            </div>
          </div>
        </div>
      </div>
      <Landing />
    </div>
  );
}
