import { customAlphabet } from 'nanoid';
import {
  Box,
  Header,
  TagBox,
  Tag,
  TagInput,
  Article,
  WriteArea,
  Footer,
  Button,
} from './WriteStyled';

type WriteFooterProps = {
  tagValue: string;
  tagList: any;
  contentValue: string;
  setTagValue: any;
  setTagList: any;
  setContentValue: any;
  setTap: any;
};

export const Write = ({
  tagValue,
  tagList,
  contentValue,
  setTagValue,
  setTagList,
  setContentValue,
  setTap,
}: WriteFooterProps) => {
  /* Header */
  const handleOnChangeTagInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTagValue(value);
  };

  const handleOnPressKeyTagInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (tagValue[0] === '#') {
        setTagList([...tagList, tagValue.substring(1).replaceAll(' ', '')]);
      } else alert('"# 태그" 형식으로 태그를 입력하세요.');

      setTagValue('');
    }
  };

  const handleOnClickTag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    setTagList(
      tagList.filter((tag: string, index: number) => index !== Number(id)),
    );
  };

  /* Article */
  const handleOnChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentValue(value);
  };
  /* Footer */
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
      title: '타이틀입니다!',
      tag: tagList,
      content: contentValue,
      time: nowTime,
    };

    localStorage.setItem('note', JSON.stringify([object, ...noteList]));

    setTap(1);
  };

  return (
    <Box>
      <Header>
        <TagBox>
          {tagList?.map((tag: string, index: number): any => {
            return (
              <Tag key={index} id={String(index)} onClick={handleOnClickTag}>
                {tag}
              </Tag>
            );
          })}
          <TagInput
            value={tagValue}
            onChange={handleOnChangeTagInput}
            onKeyPress={handleOnPressKeyTagInput}
            placeholder="# 태그를 입력해주세요."
          />
        </TagBox>
      </Header>
      <Article>
        <WriteArea
          value={contentValue}
          onChange={handleOnChangeWriteArea}
          placeholder="오늘의 다이어리를 작성해보세요."
        />
      </Article>
      <Footer>
        <Button onClick={() => setTap(0)}>돌아가기</Button>
        <Button onClick={handleOnClickEnrolDiary}>등록하기</Button>
      </Footer>
    </Box>
  );
};
