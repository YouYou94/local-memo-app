import { useRecoilValue } from 'recoil';
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
import { getModeState } from '../../recoil';

export const Write = ({ note, setNote, setIsUpdate }: any) => {
  const darkmode = useRecoilValue(getModeState);
  const [titleValue, setTitleValue] = useState<string>(note?.title || '');
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<Array<any>>(note?.tag || []);
  const [contentValue, setContentValue] = useState<string>(note?.content || '');

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
  const handleClickSaveDiary = () => {
    if (!tagList || !contentValue || !titleValue) {
      alert('빈 항목이 있습니다.');
      return;
    }

    const date = new Date();
    const nowTime = `${String(date.getFullYear()).substring(2)}.${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

    const object = {
      title: titleValue,
      tag: tagList,
      content: contentValue,
      time: nowTime,
    };

    localStorage.setItem('note', JSON.stringify(object));

    setNote(object);
    setIsUpdate(false);
  };

  return (
    <Box>
      <Header>
        <TitleInput
          mode={darkmode}
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
            mode={darkmode}
            value={tagValue}
            onChange={handleChangeTagInput}
            onKeyPress={handlePressKeyTagInput}
            placeholder="태그를 입력해보세요."
          />
        </TagBox>
      </Header>
      <Article>
        <WriteArea
          mode={darkmode}
          value={contentValue}
          onChange={handleChangeWriteArea}
          placeholder="내용을 입력해보세요."
        />
      </Article>
      <Footer>
        <Button mode={darkmode} onClick={() => setIsUpdate(false)}>
          돌아가기
        </Button>
        <Button mode={darkmode} onClick={handleClickSaveDiary}>
          저장하기
        </Button>
      </Footer>
    </Box>
  );
};
