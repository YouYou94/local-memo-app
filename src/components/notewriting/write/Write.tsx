import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
import {
  Box,
  Header,
  TitleInput,
  Nav,
  MemoColorBox,
  MemoColor,
  Section,
  WriteArea,
  Footer,
  Button,
} from './WriteStyled';

type WriteProps = {
  state: string;
  setState: any;
  setTap: any;
};

const ColorArray = [
  {
    id: '0',
    color: 'rgb(255, 113, 127)',
  },
  {
    id: '1',
    color: 'rgb(255, 189, 91)',
  },
  {
    id: '2',
    color: 'rgb(255, 240, 106)',
  },
  {
    id: '3',
    color: 'rgb(111, 255, 121);',
  },
  {
    id: '4',
    color: 'rgb(93, 204, 255)',
  },
];

export const Write = ({ state, setState, setTap }: WriteProps) => {
  const mode = useRecoilValue(getModeState);
  //const [chromeStorageState, setChromeStorageState] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [colorState, setColorState] = useState<any>({
    select: '0',
    rgb: 'rgb(255, 48, 48)',
  });

  const handleChangeTitleInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTitle(value);
  };

  const handleClickMemoColor = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;
    const colorObj = JSON.parse(id);

    setColorState({ select: colorObj.id, rgb: colorObj.color });
  };

  const handleChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setState(value);
  };

  const handleOnClickSaveButton = () => {
    // 유효성 검사
    if (!title) {
      alert('제목을 채워주세요!');
      return;
    }

    if (!state) {
      alert('메모 내용을 채워주세요!');
      return;
    }

    /* 개발자 로컬스토리지 */
    const manageState = JSON.parse(localStorage.getItem('manage') || '');

    manageState.push({
      title,
      color: colorState.rgb,
      memo: state,
    });

    localStorage.setItem('manage', JSON.stringify(manageState));

    setTap(2);

    /* 크롬 스토리지 */
    /*
    chrome.storage.sync.get(['manage'], function (items) {
      setChromeStorageState(items);
      setChromeStorageState([
        ...chromeStorageState,
        { title, color: colorState.rgb, memo: state },
      ]);

      chrome.storage.sync.set(
        { manage: JSON.stringify(chromeStorageState) },
        function () {
          console.log('Value is set to ' + chromeStorageState);
        },
      );
    });
    */
  };

  return (
    <Box>
      <Header>
        <TitleInput
          mode={mode}
          value={title}
          onChange={handleChangeTitleInput}
          placeholder="제목을 입력해주세요."
        />
      </Header>
      <Nav>
        {ColorArray.map((colorData, index) => {
          const { id, color } = colorData;
          const colorObj = { id, color };

          return (
            <MemoColorBox
              key={index}
              id={JSON.stringify(colorObj)}
              select={id === colorState.select ? true : false}
              onClick={handleClickMemoColor}
            >
              <MemoColor color={color} />
            </MemoColorBox>
          );
        })}
      </Nav>
      <Section>
        <WriteArea
          mode={mode}
          value={state}
          onChange={handleChangeWriteArea}
          placeholder="메모를 작성해주세요...."
        />
      </Section>
      <Footer>
        <Button mode={mode} onClick={handleOnClickSaveButton}>
          저장하기
        </Button>
        <Button mode={mode} onClick={() => setTap(0)}>
          취소하기
        </Button>
      </Footer>
    </Box>
  );
};
