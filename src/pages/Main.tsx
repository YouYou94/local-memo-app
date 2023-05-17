import { useRecoilValue } from 'recoil';
import {
  FlexColumnTemplate,
  FlexTemplate,
  Nav,
  Preview,
  Write,
} from '../components';
import { getModeState } from '../recoil';
import { useEffect, useState } from 'react';

const Main = () => {
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
    <FlexColumnTemplate mode={mode.toString()}>
      <Nav />
      <FlexTemplate mode={mode.toString()}>
        <Write
          titleState={title}
          contentState={content}
          setTitleState={setTitle}
          setContentState={setContent}
        />
        <Preview state={content} />
      </FlexTemplate>
    </FlexColumnTemplate>
  );
};

export default Main;
