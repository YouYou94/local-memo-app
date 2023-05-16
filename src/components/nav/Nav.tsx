import { useRecoilState } from 'recoil';
import { modeState } from '../../recoil';
import { NavBox, ModeBox, Mode } from './NavStyled';

export const Nav = () => {
  const [mode, setMode] = useRecoilState(modeState);

  const handleClickMode = () => {
    setMode(!mode);
  };

  return (
    <NavBox>
      <ModeBox mode={mode.toString()} onClick={handleClickMode}>
        <Mode />
      </ModeBox>
    </NavBox>
  );
};
