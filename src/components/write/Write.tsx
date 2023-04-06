import React, { useState } from 'react';
import {
  Box,
  WriteBox,
  WriteHeader,
  UploaderBox,
  TagBox,
  Tag,
  TagInput,
} from './WriteStyled';

export const Write = () => {
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);

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
      if (tagValue[0] + tagValue[1] === '# ') {
        setTagList([...tagList, tagValue]);
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
    <Box>
      <WriteBox>
        <WriteHeader>
          <UploaderBox></UploaderBox>
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
        </WriteHeader>
      </WriteBox>
    </Box>
  );
};
