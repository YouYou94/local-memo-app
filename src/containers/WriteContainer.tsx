import { useState } from 'react';
import {
  Template,
  WriteArticle,
  WriteFooter,
  WriteHeader,
} from '../components';

const WriteContainer = ({ setTap }: any) => {
  const [color, setColor] = useState<any>({});
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);
  const [contentValue, setContentValue] = useState<string>('');

  return (
    <Template>
      <WriteHeader
        color={color}
        tagValue={tagValue}
        tagList={tagList}
        setColor={setColor}
        setTagValue={setTagValue}
        setTagList={setTagList}
      />
      <WriteArticle
        contentValue={contentValue}
        setContentValue={setContentValue}
      />
      <WriteFooter
        color={color}
        tagList={tagList}
        contentValue={contentValue}
        setTap={setTap}
      />
    </Template>
  );
};

export default WriteContainer;
