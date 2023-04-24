import React from 'react';
import { Article, WriteArea } from './WriteStyled';

type WriteArticleProps = {
  contentValue: string;
  setContentValue: any;
};

export const WriteArticle = ({
  contentValue,
  setContentValue,
}: WriteArticleProps) => {
  const handleOnChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentValue(value);
  };

  return (
    <Article>
      <WriteArea
        value={contentValue}
        onChange={handleOnChangeWriteArea}
        placeholder="오늘의 다이어리를 작성해보세요."
      />
    </Article>
  );
};
