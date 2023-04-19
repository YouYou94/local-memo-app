import { Box, CoverBox, Footer, Button } from './CoverStyled';

export const Cover = ({ setTap, setStep, setWriteState }: any) => {
  return (
    <Box>
      <CoverBox>
        <Footer>
          <Button onClick={() => setTap(0)}>돌아가기</Button>
          <Button onClick={() => setStep(1)}>다음으로</Button>
        </Footer>
      </CoverBox>
    </Box>
  );
};
