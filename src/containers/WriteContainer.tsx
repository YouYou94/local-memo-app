import { useState } from 'react';
import {
  Template,
  WriteArticle,
  WriteFooter,
  WriteHeader,
} from '../components';

const WriteContainer = ({ setTap }: any) => {
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);
  const [contentValue, setContentValue] = useState<string>('');

  return (
    <Template>
      <WriteHeader
        tagValue={tagValue}
        tagList={tagList}
        setTagValue={setTagValue}
        setTagList={setTagList}
      />
      <WriteArticle
        contentValue={contentValue}
        setContentValue={setContentValue}
      />
      <WriteFooter
        tagList={tagList}
        contentValue={contentValue}
        setTap={setTap}
      />
    </Template>
  );
};

export default WriteContainer;
