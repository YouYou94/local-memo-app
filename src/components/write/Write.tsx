import React from 'react';
import { customAlphabet } from 'nanoid';
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
import { useNavigate, useParams } from 'react-router-dom';
import { MemoType } from '../../interface/MemoInterface';

type WriteProps = {
  paramId: string | undefined;
  titleState: string;
  contentState: string;
  setTitleState: React.Dispatch<React.SetStateAction<string>>;
  setContentState: React.Dispatch<React.SetStateAction<string>>;
};

export const Write = ({
  paramId,
  titleState,
  contentState,
  setTitleState,
  setContentState,
}: WriteProps) => {
  const mode = useRecoilValue(getModeState);
  const navigate = useNavigate();
  const param = useParams();
  const nanoid = customAlphabet('abcd1234', 4);

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
    navigate(-1);
  };

  const handleClickSave = () => {
    const date = new Date();

    const object = {
      id: nanoid(),
      title: titleState,
      content: contentState,
      write_date: `${String(date.getFullYear()).substring(2)}. ${String(
        date.getMonth() + 1,
      ).padStart(2, '0')}. ${String(date.getDate())}`,
    };

    const existingDatas = JSON.parse(localStorage.getItem('memo') || '[]');

    localStorage.setItem('memo', JSON.stringify([object, ...existingDatas]));

    navigate('/local-memo-app/memo');

    alert('저장되었습니다!');
  };

  const handleClickUpdate = () => {
    let existingDatas = JSON.parse(localStorage.getItem('memo') || '[]');
    const index = existingDatas.findIndex(
      (existingData: MemoType) => existingData.id === paramId,
    );

    existingDatas[index] = {
      ...existingDatas[index],
      title: titleState,
      content: contentState,
    };

    localStorage.setItem('memo', JSON.stringify(existingDatas));

    navigate('/local-memo-app/memo');

    alert('수정되었습니다!');
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
          뒤로가기
        </Button>
        {param?.id === 'enrol' ? (
          <Button onClick={handleClickSave} mode={mode.toString()}>
            저장하기
          </Button>
        ) : (
          <Button onClick={handleClickUpdate} mode={mode.toString()}>
            수정하기
          </Button>
        )}
      </ButtonBox>
    </Box>
  );
};
