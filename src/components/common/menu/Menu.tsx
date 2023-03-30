import { useRecoilState } from 'recoil';
import { modeState } from '../../../recoil/atom';
import { Box, DisplayButton, List, MenuIcon, MenuItem } from './MenuStyled';
import DARKMODE from '../../../assets/image/darkmode.png';
import Add from '../../../assets/image/add.png';
import Manage from '../../../assets/image/manage.png';

export const Menu = ({ setTap }: any) => {
  const [mode, setMode] = useRecoilState<string>(modeState);

  const onClickModeChangeMenu = () => {
    if (mode === 'bright') setMode('dark');
    else setMode('bright');
  };

  const onClickAddMenu = () => setTap(0);

  const onClickManageMenu = () => setTap(1);

  return (
    <Box mode={mode}>
      <DisplayButton mode={mode}>
        M<br />
        E<br />
        N<br />U
      </DisplayButton>
      <List>
        <MenuItem onClick={onClickModeChangeMenu} title="화면대비">
          <MenuIcon icon={DARKMODE} mode={mode} />
        </MenuItem>
        <MenuItem onClick={onClickAddMenu} title="노트추가하기">
          <MenuIcon icon={Add} />
        </MenuItem>
        <MenuItem onClick={onClickManageMenu} title="노트관리하기">
          <MenuIcon icon={Manage} />
        </MenuItem>
      </List>
    </Box>
  );
};
