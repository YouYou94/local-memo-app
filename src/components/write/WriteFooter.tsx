import { Footer, Button } from './WriteStyled';
import { customAlphabet } from 'nanoid';

type WriteFooterProps = {
  tagList: any;
  contentValue: string;
  setTap: any;
};

export const WriteFooter = ({
  tagList,
  contentValue,
  setTap,
}: WriteFooterProps) => {
  const nanoid = customAlphabet('01234567899abcedf', 6);

  const handleOnClickEnrolDiary = () => {
    if (!tagList || !contentValue) {
      alert('빈 항목이 있습니다.');
      return;
    }

    const noteList = JSON.parse(localStorage.getItem('note') || '');

    const date = new Date();
    const nowTime = `${String(date.getFullYear()).substring(2)}.${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

    const object = {
      id: nanoid(),
      tag: tagList,
      content: contentValue,
      time: nowTime,
    };

    localStorage.setItem('note', JSON.stringify([object, ...noteList]));

    setTap(1);
  };

  return (
    <Footer>
      <Button onClick={() => setTap(0)}>돌아가기</Button>
      <Button onClick={handleOnClickEnrolDiary}>등록하기</Button>
    </Footer>
  );
};
