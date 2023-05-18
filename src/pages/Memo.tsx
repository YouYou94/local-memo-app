import { useRecoilValue } from 'recoil';
import { FlexTemplate, Preview, Write } from '../components';
import { getModeState } from '../recoil';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MemoType } from '../interface/MemoInterface';

const Memo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const mode = useRecoilValue(getModeState);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    if (id !== 'enrol') {
      if (
        !JSON.parse(localStorage.getItem('memo') || '').find(
          (memo: MemoType) => memo.id === id,
        )
      ) {
        navigate('/off-line-memo-app/memo/enrol');
      } else {
        const { title, content } = JSON.parse(
          localStorage.getItem('memo') || '',
        ).find((memo: MemoType) => memo.id === id);

        setTitle(title);
        setContent(content);
      }
    }
  }, [id, navigate]);

  return (
    <FlexTemplate mode={mode.toString()}>
      <Write
        paramId={id}
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
