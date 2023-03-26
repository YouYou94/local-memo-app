import { useState } from 'react';
import {
  Box,
  Header,
  TitleInput,
  Section,
  WriteArea,
  Footer,
  SaveButton,
} from './WriteStyled';

type WriteProps = {
  state: string;
  setState: any;
};

export const Write = ({ state, setState }: WriteProps) => {
  const [title, setTitle] = useState<string>('');

  const handleChangeTitleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTitle(value);
  };

  const handleChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setState(value);
  };

  return (
    <Box>
      <Header>
        <TitleInput
          value={title}
          onChange={handleChangeTitleInput}
          placeholder="제목을 입력해주세요."
        />
      </Header>
      <Section>
        <WriteArea
          value={state}
          onChange={handleChangeWriteArea}
          placeholder="메모를 작성해주세요...."
        />
      </Section>
      <Footer>
        <SaveButton>저장하기</SaveButton>
      </Footer>
    </Box>
  );
};
