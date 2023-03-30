import { Manage, Template } from '../../components';
import { Box } from './NoteManagerContainerStyled';

const NoteManagerContainer = () => {
  return (
    <Template>
      <Box>
        <Manage />
      </Box>
    </Template>
  );
};

export default NoteManagerContainer;
