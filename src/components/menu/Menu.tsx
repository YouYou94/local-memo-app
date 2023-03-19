import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil/atom';
import { useNavigate } from 'react-router-dom';
import { Box, DisplayButton, List, MenuIcon, MenuItem } from './MenuStyled';
import HOME from '../../assets/image/home.png';
import DARKMODE from '../../assets/image/darkmode.png';

export const Menu = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState<boolean>(modeState);

  const onClickHomeMenu = () => navigate('/noteapp');

  const onClickModeChanger = () => setMode(!mode);

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
      </List>
    </Box>
  );
};
