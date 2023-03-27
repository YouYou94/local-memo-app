import { Box, Item, List } from './ManageStyled';

export const Manage = () => {
  const memoState = JSON.parse(localStorage.getItem('manage') || '');
  ////
  return (
    <Box>
      <List>
        {memoState.map((memo: any, index: any) => {
          return <Item></Item>;
        })}
      </List>
    </Box>
  );
};
