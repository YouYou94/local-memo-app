import { Box, List, Item } from './ManageStyled';

type ManageProps = {
  user: any;
};

export const Manage = ({ user }: ManageProps) => {
  return (
    <Box>
      <List>
        <Item>Add</Item>
      </List>
    </Box>
  );
};
