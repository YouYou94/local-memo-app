import { useState } from 'react';
import { Box, List, MenuIcon, MenuItem } from './MenuStyled';

export const Menu = () => {
  const [mode, setMode] = useState<boolean>(true);

  const onClickModeChanger = () => setMode(!mode);

  return (
    <Box>
      <List>
        <MenuItem></MenuItem>
        <MenuItem onClick={onClickModeChanger}>
          <MenuIcon mode={mode} />
        </MenuItem>
        <MenuItem></MenuItem>
      </List>
    </Box>
  );
};
