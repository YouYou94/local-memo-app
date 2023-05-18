import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil';
import { NavBox, TitleBox, Title, ModeBox, Mode } from './NavStyled';
import { useLocation } from 'react-router-dom';

export const Nav = () => {
  const location = useLocation();
  const [mode, setMode] = useRecoilState(modeState);

  const handleClickMode = () => {
    setMode(!mode);
  };

  return (
    <NavBox>
      <TitleBox>
        {location.pathname !== '/off-line-memo-app' ? (
          <Title>OMemo</Title>
        ) : (
          <></>
        )}
      </TitleBox>
      <ModeBox mode={mode.toString()} onClick={handleClickMode}>
        <Mode />
      </ModeBox>
    </NavBox>
  );
};
