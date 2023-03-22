import { useState } from 'react';
import { Preview, Template, Write } from '../../components';

const ROW = 'row';

const WriteContainer = () => {
  const [memo, setMemo] = useState<string>('');

  return (
    <Template direction={ROW}>
      <Write state={memo} setState={setMemo} />
      <Preview state={memo} />
    </Template>
  );
};

export default WriteContainer;
