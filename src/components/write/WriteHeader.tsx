import React from 'react';
import { Header, ColorBox, Color, TagBox, Tag, TagInput } from './WriteStyled';

type WriteHeaderProps = {
  color: any;
  tagValue: string;
  tagList: any;
  setColor: any;
  setTagValue: any;
  setTagList: any;
};

const COLORLIST = [
  { id: 0, colorRGB: 'rgb(255, 113, 127)' },
  { id: 1, colorRGB: 'rgb(255, 189, 91)' },
  { id: 2, colorRGB: 'rgb(255, 240, 106)' },
  { id: 3, colorRGB: 'rgb(111, 255, 121)' },
  { id: 4, colorRGB: 'rgb(0, 95, 255)' },
];

export const WriteHeader = ({
  color,
  tagValue,
  tagList,
  setColor,
  setTagValue,
  setTagList,
}: WriteHeaderProps) => {
  const handleOnClickColor = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    setColor(COLORLIST.filter((color) => color.id === Number(id))[0]);
  };

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
      <ColorBox>
        {COLORLIST.map((value: any, index: number): any => {
          const { id, colorRGB } = value;

          return (
            <Color
              key={index}
              id={id}
              color={colorRGB}
              select={id === color.id}
              onClick={handleOnClickColor}
            />
          );
        })}
      </ColorBox>
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
