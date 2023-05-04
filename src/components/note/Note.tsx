import React, { useEffect, useState } from 'react';
import {
  Box,
  Header,
  Milestone,
  MilestoneButton,
  PageLabel,
  Article,
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

export const Note = () => {
  const [notes, setNotes] = useState<any>(
    JSON.parse(localStorage.getItem('note') || ''),
  );
  const [nowPage, setNowPage] = useState<number>(0);

  console.log(notes);

  const handleClickPrev = () => {
    if (nowPage !== 0) setNowPage(nowPage - 1);
  };

  const handleClickNext = () => {
    if (nowPage !== notes.length - 1) setNowPage(nowPage + 1);
  };

  const handleClickDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;

    if (window.confirm('정말로 삭제하시겠습니까?')) {
      const noteObject = notes.filter((note: any) => note.id !== id);

      localStorage.setItem('note', JSON.stringify(noteObject));

      alert('삭제되었습니다.');

      setNotes(noteObject);
      setNowPage(0);
    }
  };

  return (
    <Box>
      <Header>
        <MilestoneButton onClick={handleClickPrev}>이전</MilestoneButton>
        <Milestone>
          <PageLabel>{notes.length > 0 ? nowPage + 1 : 0}</PageLabel>
          <PageLabel>/</PageLabel>
          <PageLabel>{notes.length}</PageLabel>
        </Milestone>
        <MilestoneButton onClick={handleClickNext}>다음</MilestoneButton>
      </Header>
      <Article>
        {notes.length > 0 ? (
          <NoteBox>
            <NoteHeader>
              <TitleTimeBox>
                <NoteTitle>{notes[nowPage]?.title}</NoteTitle>
                <NoteTime>등록한 날짜 : {notes[nowPage]?.time}</NoteTime>
              </TitleTimeBox>
              <TagBox>
                {notes[nowPage]?.tag?.map((t: string, index: number) => {
                  return <Tag key={index}>{t}</Tag>;
                })}
              </TagBox>
            </NoteHeader>
            <NoteArticle>{notes[nowPage]?.content}</NoteArticle>
            <NoteFooter>
              <Button onClick={handleClickDelete} id={notes[nowPage]?.id}>
                삭제하기
              </Button>
              <Button>수정하기</Button>
            </NoteFooter>
          </NoteBox>
        ) : (
          <></>
        )}
      </Article>
    </Box>
  );
};
