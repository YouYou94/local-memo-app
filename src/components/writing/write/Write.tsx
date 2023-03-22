import { Box, Header, Section, WriteArea } from './WriteStyled';

type WriteProps = {
  state: string;
  setState: any;
};

export const Write = ({ state, setState }: WriteProps) => {
  const handleChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setState(value);
  };

  return (
    <Box>
      <Header>세팅 메뉴</Header>
      <Section>
        <WriteArea
          value={state}
          onChange={handleChangeWriteArea}
          placeholder="메모를 작성해주세요...."
        />
      </Section>
    </Box>
  );
};
