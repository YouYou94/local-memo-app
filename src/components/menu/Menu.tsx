import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { Box, DisplayButton, List, MenuIcon, MenuItem } from './MenuStyled';
import HOME from '../../assets/image/home.png';
import DARKMODE from '../../assets/image/darkmode.png';
import Add from '../../assets/image/add.png';

export const Menu = () => {
  const [mode, setMode] = useRecoilState<string>(modeState);

  const onClickHomeMenu = () => {};

  const onClickModeChanger = () => {};

  const onClickAddNote = () => {};

  return (
    <Box mode={mode}>
      <DisplayButton mode={mode}>
        M<br />
        E<br />
        N<br />U
      </DisplayButton>
      <List>
        <MenuItem onClick={onClickHomeMenu} title="홈으로가기">
          <MenuIcon icon={HOME} />
        </MenuItem>
        <MenuItem onClick={onClickModeChanger} title="화면대비">
          <MenuIcon icon={DARKMODE} mode={mode} />
        </MenuItem>
        <MenuItem onClick={onClickAddNote} title="노트추가">
          <MenuIcon icon={Add} />
        </MenuItem>
      </List>
    </Box>
  );
};
