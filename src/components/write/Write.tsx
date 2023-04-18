import React, { useState } from 'react';
import {
  Box,
  WriteBox,
  Nav,
  Button,
  Header,
  TagBox,
  Tag,
  TagInput,
  Article,
  WriteArea,
} from './WriteStyled';

export const Write = ({ setTap }: any) => {
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);

  const [contentValue, setContentValue] = useState<string>('');

  const handleOnChangeTagInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTagValue(value);
  };

  const handleOnPressKeyTagInput = (
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

  const handleOnClickTag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    setTagList(
      tagList.filter((tag: string, index: number) => index !== Number(id)),
    );
  };

  const handleOnChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentValue(value);
  };

  return (
    <Box>
      <WriteBox>
        <Header>
          <TagBox>
            {tagList?.map((tag: string, index: number): any => {
              return (
                <Tag key={index} id={String(index)} onClick={handleOnClickTag}>
                  {tag}
                </Tag>
              );
            })}
            <TagInput
              value={tagValue}
              onChange={handleOnChangeTagInput}
              onKeyPress={handleOnPressKeyTagInput}
              placeholder="# 태그를 입력해주세요."
            />
          </TagBox>
        </Header>
        <Article>
          <WriteArea
            value={contentValue}
            onChange={handleOnChangeWriteArea}
            placeholder="오늘의 다이어리를 작성해보세요."
          />
        </Article>
        <Nav>
          <Button onClick={() => setTap(0)}>돌아가기</Button>
          <Button onClick={() => setTap(0)}>등록하기</Button>
        </Nav>
      </WriteBox>
    </Box>
  );
};
