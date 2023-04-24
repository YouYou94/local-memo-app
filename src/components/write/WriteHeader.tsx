import React from 'react';
import { Header, TagBox, Tag, TagInput } from './WriteStyled';

type WriteHeaderProps = {
  tagValue: string;
  tagList: any;
  setTagValue: any;
  setTagList: any;
};

export const WriteHeader = ({
  tagValue,
  tagList,
  setTagValue,
  setTagList,
}: WriteHeaderProps) => {
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

  return (
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
  );
};
