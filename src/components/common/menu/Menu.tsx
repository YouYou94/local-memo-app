import { useRecoilState } from 'recoil';
import { modeState } from '../../../recoil/atom';
import { Box, DisplayButton, List, MenuIcon, MenuItem } from './MenuStyled';
import DARKMODE from '../../../assets/image/darkmode.png';
import Home from '../../../assets/image/home.png';
import Add from '../../../assets/image/add.png';
import Manage from '../../../assets/image/manage.png';

export const Menu = ({ setTap }: any) => {
  const [mode, setMode] = useRecoilState<string>(modeState);

  const handleOnClickModeChangeMenu = () => {
    if (mode === 'bright') setMode('dark');
    else setMode('bright');
  };

  const handleOnClickHomeIcon = () => setTap(0);

  const handleOnClickAddMenu = () => setTap(1);

  const handleOnClickManageMenu = () => setTap(2);

  return (
    <Box mode={mode}>
      <DisplayButton mode={mode}>
        M<br />
        E<br />
        N<br />U
      </DisplayButton>
      <List>
        <MenuItem onClick={handleOnClickModeChangeMenu} title="화면대비">
          <MenuIcon icon={DARKMODE} mode={mode} />
        </MenuItem>
        <MenuItem onClick={handleOnClickHomeIcon} title="메인">
          <MenuIcon icon={Home} />
        </MenuItem>
        <MenuItem onClick={handleOnClickAddMenu} title="노트추가하기">
          <MenuIcon icon={Add} />
        </MenuItem>
        <MenuItem onClick={handleOnClickManageMenu} title="노트관리하기">
          <MenuIcon icon={Manage} />
        </MenuItem>
      </List>
    </Box>
  );
};
