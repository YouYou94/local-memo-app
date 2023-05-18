import { useRecoilValue } from 'recoil';
import { FlexTemplate, Preview, Write } from '../components';
import { getModeState } from '../recoil';
import { useEffect, useState } from 'react';

const Memo = () => {
  const mode = useRecoilValue(getModeState);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem('memo')) {
      const { title, content } = JSON.parse(localStorage.getItem('memo') || '');

      setTitle(title);
      setContent(content);
    }
  }, []);

  return (
    <FlexTemplate mode={mode.toString()}>
      <Write
        titleState={title}
        contentState={content}
        setTitleState={setTitle}
        setContentState={setContent}
      />
      <Preview state={content} />
    </FlexTemplate>
  );
};

export default Memo;
