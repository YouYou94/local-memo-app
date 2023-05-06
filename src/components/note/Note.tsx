import React from 'react';
import {
  Box,
  NoteBox,
  NoteHeader,
  TitleTimeBox,
  NoteTitle,
  NoteTime,
  TagBox,
  Tag,
  NoteArticle,
  NoteFooter,
  Button,
} from './NoteStyled';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil';

export const Note = ({ note, setNote, setIsUpdate }: any) => {
  const darkmode = useRecoilValue(getModeState);

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!note.title) {
      alert('노트가 비어있습니다!');
      return;
    }

    if (window.confirm('정말로 삭제하시겠습니까?')) {
      localStorage.setItem('note', JSON.stringify({}));

      setNote({});

      alert('삭제되었습니다.');
    }
  };

  const handleClickUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsUpdate(true);
  };

  return (
    <Box>
      <NoteBox>
        <NoteHeader>
          <TitleTimeBox>
            <NoteTitle>{note?.title || '존재하는 노트가 없습니다.'}</NoteTitle>
            <NoteTime>
              {note?.time ? `수정한 날짜 : ${note?.time}` : ''}
            </NoteTime>
          </TitleTimeBox>
          <TagBox>
            {note?.tag?.map((t: string, index: number) => {
              return <Tag key={index}>{t}</Tag>;
            }) || '태그가 비어있습니다.'}
          </TagBox>
        </NoteHeader>
        <NoteArticle>{note?.content || '내용을 작성해보세요.'}</NoteArticle>
        <NoteFooter>
          <Button mode={darkmode} onClick={handleClickDelete} id={note?.id}>
            지우기
          </Button>
          <Button mode={darkmode} onClick={handleClickUpdate} id={note?.id}>
            수정하기
          </Button>
        </NoteFooter>
      </NoteBox>
    </Box>
  );
};
