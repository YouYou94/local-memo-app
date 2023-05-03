import { useState } from 'react';
import { Template, Write } from '../components';

const WriteContainer = ({ setTap }: any) => {
  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);
  const [contentValue, setContentValue] = useState<string>('');

  return (
    <Template>
      <Write
        tagValue={tagValue}
        tagList={tagList}
        contentValue={contentValue}
        setTagValue={setTagValue}
        setTagList={setTagList}
        setContentValue={setContentValue}
        setTap={setTap}
      />
    </Template>
  );
};

export default WriteContainer;
