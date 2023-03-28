import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
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
  const mode = useRecoilValue(getModeState);
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

  const handleOnClickSaveButton = () => {
    // 유효성 검사
    if (!title) {
      alert('제목을 채워주세요!');
      return;
    }

    if (!state) {
      alert('메모 내용을 채워주세요!');
      return;
    }

    const manageState = JSON.parse(localStorage.getItem('manage') || '');

    manageState.push({
      title,
      memo: state,
    });

    localStorage.setItem('manage', JSON.stringify(manageState));

    // 저장 완료 시 관리 화면으로 탭 변경
    setTap(2);
  };

  return (
    <Box>
      <Header>
        <TitleInput
          mode={mode}
          value={title}
          onChange={handleChangeTitleInput}
          placeholder="제목을 입력해주세요."
        />
      </Header>
      <Section>
        <WriteArea
          mode={mode}
          value={state}
          onChange={handleChangeWriteArea}
          placeholder="메모를 작성해주세요...."
        />
      </Section>
      <Footer>
        <Button mode={mode} onClick={handleOnClickSaveButton}>
          저장하기
        </Button>
        <Button mode={mode} onClick={() => setTap(0)}>
          취소하기
        </Button>
      </Footer>
    </Box>
  );
};
