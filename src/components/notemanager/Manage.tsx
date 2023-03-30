import { Box, List, Item, ItemTitle, ItemMemo } from './ManageStyled';

export const Manage = () => {
  const memoState = JSON.parse(localStorage.getItem('manage') || '');

  return (
    <Box>
      <List>
        {memoState.map((memoData: any, index: any) => {
          const { title, color, memo } = memoData;
          return (
            <Item color={color}>
              <ItemTitle>{title}</ItemTitle>
              <ItemMemo>
                {memo.length > 30 ? memo.substr(0, 30) + '...' : memo}
              </ItemMemo>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
