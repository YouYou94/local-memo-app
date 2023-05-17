import React from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil';
import {
  Box,
  TitleBox,
  TitleInput,
  WriteBox,
  WriteArea,
  ButtonBox,
  Button,
} from './WriteStyled';

type WriteProps = {
  titleState: string;
  contentState: string;
  setTitleState: React.Dispatch<React.SetStateAction<string>>;
  setContentState: React.Dispatch<React.SetStateAction<string>>;
};

export const Write = ({
  titleState,
  contentState,
  setTitleState,
  setContentState,
}: WriteProps) => {
  const mode = useRecoilValue(getModeState);

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitleState(value);
  };

  const handleChangeContent = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentState(value);
  };

  const handleClickDelete = () => {
    setTitleState('');
    setContentState('');
  };

  const handleClickSave = () => {
    const object = {
      title: titleState,
      content: contentState,
    };

    localStorage.setItem('memo', JSON.stringify(object));

    alert('저장되었습니다!');
  };

  return (
    <Box>
      <TitleBox>
        <TitleInput
          value={titleState}
          onChange={handleChangeTitle}
          mode={mode.toString()}
          placeholder="제목"
        />
      </TitleBox>
      <WriteBox>
        <WriteArea
          value={contentState}
          onChange={handleChangeContent}
          mode={mode.toString()}
          placeholder="내용"
        />
      </WriteBox>
      <ButtonBox>
        <Button onClick={handleClickDelete} mode={mode.toString()}>
          지우기
        </Button>
        <Button onClick={handleClickSave} mode={mode.toString()}>
          저장하기
        </Button>
      </ButtonBox>
    </Box>
  );
};
