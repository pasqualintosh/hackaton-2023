import { useState } from 'react';
import {
  BottomSection,
  ExpandButton,
  ExpandWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  Map,
  Panel,
  Pin,
  Separator,
  Submit,
} from './components';
import { Landing } from './components/landing';

export default function App() {
  const [isExpandMode, setIsExpandMode] = useState(false);

  return (
    <div>
      <Map />
      <Panel isFullscreen={isExpandMode}>
        <div>
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
          <BottomSection
            stop={20}
            stops={['Ancona', 'Agrigiento', 'Firenze', 'Roma']}
            km='15'
            isFullscreen={isExpandMode}
          >
            <ExpandWrapper>
              <ExpandButton onClick={() => setIsExpandMode(!isExpandMode)} />
            </ExpandWrapper>
          </BottomSection>
        </div>
      </Panel>
      <Landing />
    </div>
  );
}
