import { useNavigate } from 'react-router-dom';
import { Box, Title, ButtonBox, Button } from './CoverStyled';

export const Cover = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Title>LMemo</Title>
      <ButtonBox>
        <Button onClick={() => navigate('/off-line-memo-app/memo')}>
          → Start
        </Button>
      </ButtonBox>
    </Box>
  );
};
