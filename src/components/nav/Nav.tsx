import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil';
import {
  NavBox,
  TitleBox,
  Title,
  MenuBox,
  Menu,
  Mode,
  MenuIcon,
} from './NavStyled';
import { useLocation, useNavigate } from 'react-router-dom';
import AddIcon from '../../assets/menu/add.png';
import ModeIcon from '../../assets/menu/mode.png';

export const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mode, setMode] = useRecoilState(modeState);

  return (
    <NavBox>
      <TitleBox>
        {location.pathname !== '/off-line-memo-app' ? (
          <Title>OMemo</Title>
        ) : (
          <></>
        )}
      </TitleBox>
      <MenuBox>
        {location.pathname !== '/off-line-memo-app/memo/enrol' ? (
          <Menu
            mode={mode.toString()}
            onClick={() => navigate('/off-line-memo-app/memo/enrol')}
            title="메모추가"
          >
            <MenuIcon iconUrl={AddIcon} />
          </Menu>
        ) : (
          <></>
        )}
        <Mode
          mode={mode.toString()}
          onClick={() => setMode(!mode)}
          title="다크모드"
        >
          <MenuIcon iconUrl={ModeIcon} />
        </Mode>
      </MenuBox>
    </NavBox>
  );
};
