import { useState } from 'react';
import { List } from '../components';

const MemoList = () => {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem('memo') || '[]'),
  );

  console.log(memos);
  return <List state={memos} setState={setMemos} />;
};

export default MemoList;
