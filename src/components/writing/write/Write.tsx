import { useState } from 'react';
import {
  Box,
  Header,
  TitleInput,
  Section,
  WriteArea,
  Footer,
  Button,
} from './WriteStyled';

type WriteProps = {
  state: string;
  setState: any;
  setTap: any;
};

export const Write = ({ state, setState, setTap }: WriteProps) => {
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

  const handleOnClickSaveButton = () => {};

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
        <Button onClick={handleOnClickSaveButton}>저장하기</Button>
        <Button onClick={() => setTap(0)}>취소하기</Button>
      </Footer>
    </Box>
  );
};
