import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { Box, List, MenuIcon, MenuItem } from './MenuStyled';

export const Menu = () => {
  const [mode, setMode] = useRecoilState<boolean>(modeState);

  const onClickModeChanger = () => setMode(!mode);

  return (
    <Box mode={mode}>
      <List>
        <MenuItem mode={mode}></MenuItem>
        <MenuItem mode={mode} onClick={onClickModeChanger} title="화면대비">
          <MenuIcon mode={mode} />
        </MenuItem>
        <MenuItem mode={mode}></MenuItem>
      </List>
    </Box>
  );
};
