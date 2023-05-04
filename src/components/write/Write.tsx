import { customAlphabet } from 'nanoid';
import {
  Box,
  Header,
  TagBox,
  Tag,
  TagInput,
  Article,
  WriteArea,
  Footer,
  Button,
  TitleInput,
} from './WriteStyled';
import { useState } from 'react';

export const Write = ({ setTap }: any) => {
  const [titleValue, setTitleValue] = useState<string>('');
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<Array<any>>([]);
  const [contentValue, setContentValue] = useState<string>('');

  /* Header */
  const handleCangeTitleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTitleValue(value);
  };

  const handleChangeTagInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTagValue(value);
  };

  const handlePressKeyTagInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (tagValue[0] === '#') {
        setTagList([...tagList, tagValue.substring(1).replaceAll(' ', '')]);
      } else alert('"# 태그" 형식으로 태그를 입력하세요.');

      setTagValue('');
    }
  };

  const handleClickTag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    setTagList(
      tagList.filter((tag: string, index: number) => index !== Number(id)),
    );
  };

  /* Article */
  const handleChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentValue(value);
  };

  /* Footer */
  const nanoid = customAlphabet('01234567899abcedf', 6);

  const handleClickEnrolDiary = () => {
    if (!tagList || !contentValue || !titleValue) {
      alert('빈 항목이 있습니다.');
      return;
    }

    const noteList = JSON.parse(localStorage.getItem('note') || '');

    const date = new Date();
    const nowTime = `${String(date.getFullYear()).substring(2)}.${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

    const object = {
      id: nanoid(),
      title: titleValue,
      tag: tagList,
      content: contentValue,
      time: nowTime,
    };

    localStorage.setItem('note', JSON.stringify([object, ...noteList]));

    setTap(1);
  };

  return (
    <Box>
      <Header>
        <TitleInput
          value={titleValue}
          onChange={handleCangeTitleInput}
          placeholder="제목을 입력해보세요."
        />
        <TagBox>
          {tagList?.map((tag: string, index: number): any => {
            return (
              <Tag key={index} id={String(index)} onClick={handleClickTag}>
                {tag}
              </Tag>
            );
          })}
          <TagInput
            value={tagValue}
            onChange={handleChangeTagInput}
            onKeyPress={handlePressKeyTagInput}
            placeholder="태그를 입력해보세요."
          />
        </TagBox>
      </Header>
      <Article>
        <WriteArea
          value={contentValue}
          onChange={handleChangeWriteArea}
          placeholder="내용을 입력해보세요."
        />
      </Article>
      <Footer>
        <Button onClick={() => setTap(0)}>돌아가기</Button>
        <Button onClick={handleClickEnrolDiary}>등록하기</Button>
      </Footer>
    </Box>
  );
};
