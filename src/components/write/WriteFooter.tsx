import { Footer, Button } from './WriteStyled';
import { customAlphabet } from 'nanoid';

type WriteFooterProps = {
  color: any;
  tagList: any;
  contentValue: string;
  setTap: any;
};

export const WriteFooter = ({
  color,
  tagList,
  contentValue,
  setTap,
}: WriteFooterProps) => {
  const nanoid = customAlphabet('01234567899abcedf', 6);

  const handleOnClickEnrolDiary = () => {
    if (!tagList || !contentValue || !color) {
      alert('빈 항목이 있습니다.');
      return;
    }

    const feedList = JSON.parse(localStorage.getItem('feed') || '');

    const date = new Date();
    const nowTime = `${String(date.getFullYear()).substring(2)}.${String(
      date.getMonth() + 1,
    ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(
      Number(date.getHours()) > 12
        ? Number(date.getHours()) - 12
        : date.getHours(),
    ).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

    const object = {
      id: nanoid(),
      color: color.colorRGB,
      tag: tagList,
      content: contentValue,
      time: nowTime,
    };

    localStorage.setItem('feed', JSON.stringify([object, ...feedList]));

    setTap(0);
  };

  return (
    <Footer>
      <Button onClick={() => setTap(0)}>돌아가기</Button>
      <Button onClick={handleOnClickEnrolDiary}>등록하기</Button>
    </Footer>
  );
};
