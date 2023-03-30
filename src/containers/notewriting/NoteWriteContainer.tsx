import { useState } from 'react';
import { Preview, Template, Write } from '../../components';

const NoteWritingContainer = ({ setTap }: any) => {
  const [memo, setMemo] = useState<string>('');

  return (
    <Template>
      <Write state={memo} setState={setMemo} setTap={setTap} />
      <Preview state={memo} />
    </Template>
  );
};

export default NoteWritingContainer;
