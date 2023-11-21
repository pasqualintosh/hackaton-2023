import { useState } from 'react';
import {
  BottomSection,
  Close,
  CloseWrapper,
  ContentWrapper,
  Dots,
  EmptyWrapper,
  ExpandButton,
  ExpandWrapper,
  IconWrapper,
  Input,
  InputWrapper,
  LeftWrapper,
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
        {isExpandMode && (
          <CloseWrapper press={() => setIsExpandMode(false)}>
            <Close />
          </CloseWrapper>
        )}
        <ContentWrapper>
          <LeftWrapper>
            <IconWrapper>
              <div className='bg-white w-[10px] h-[10px] rounded-3xl'></div>
            </IconWrapper>
            <Dots />
            <IconWrapper>
              <Pin />
            </IconWrapper>
          </LeftWrapper>
          <div>
            <InputWrapper>
              <Input placeholder='Starting point' />
            </InputWrapper>

            <Separator />

            <InputWrapper>
              <Input placeholder='Arrival point' />
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
              <Submit placeholder='Go!' value={'Go!'} />
            </InputWrapper>
          </div>
        </ContentWrapper>

        <BottomSection
          stop={20}
          stops={['Ancona', 'Agrigiento', 'Firenze', 'Roma']}
          km='15'
          isFullscreen={isExpandMode}
        >
          <ExpandWrapper>
            {!isExpandMode && (
              <ExpandButton onClick={() => setIsExpandMode(!isExpandMode)} />
            )}
          </ExpandWrapper>
        </BottomSection>
      </Panel>
      <Landing />
    </div>
  );
}
