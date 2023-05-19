import React from 'react';
import {
  Box,
  MemoContainer,
  MemoBox,
  LetterBox,
  TitleBox,
  ContentBox,
  Title,
  Content,
  SettingBox,
  DeleteBox,
  Delete,
  DateBox,
  DateLabel,
} from './ListStyled';
import { useNavigate } from 'react-router-dom';
import { MemoType } from '../../interface/MemoInterface';
import { Markdown } from '../markdown/Markdown';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil';

type ListProps = {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

export const List = ({ state, setState }: ListProps) => {
  const navigate = useNavigate();
  const mode = useRecoilValue(getModeState);

  const handleClickMemo = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    navigate(`/off-line-memo-app/memo/${id}`);
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    if (window.confirm('삭제하시겠습니까?')) {
      setState(state?.filter((memo: MemoType) => memo.id !== id));

      alert('삭제되었습니다.');
    }

    localStorage.setItem('memo', JSON.stringify(state));
  };
  console.log(state);

  return (
    <Box>
      {state?.map((memo: MemoType) => {
        const { id, title, content, write_date } = memo;

        return (
          <MemoContainer key={id}>
            <MemoBox>
              <LetterBox id={id} onClick={handleClickMemo}>
                <TitleBox>
                  <Title>
                    {title || (
                      <Markdown content="__제목이 없는 메모입니다.__" />
                    )}
                  </Title>
                </TitleBox>
                <ContentBox>
                  <Content>
                    {content || (
                      <Markdown content="__내용이 없는 메모입니다.__" />
                    )}
                  </Content>
                </ContentBox>
              </LetterBox>
              <SettingBox>
                <DeleteBox
                  mode={mode.toString()}
                  id={id}
                  onClick={handleClickDelete}
                >
                  <Delete />
                </DeleteBox>
              </SettingBox>
            </MemoBox>
            <DateBox>
              <DateLabel>writed. {write_date}</DateLabel>
            </DateBox>
          </MemoContainer>
        );
      })}
    </Box>
  );
};
