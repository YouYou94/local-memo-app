import styled from 'styled-components';
import ModeIcon from '../../assets/menu/mode.png';

export const NavBox = styled.nav`
  height: 5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 2rem;
`;

export const ModeBox = styled.div<{ mode: string }>`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(204, 204, 204)' : 'rgb(245, 245, 245)'};

  ${(prop) =>
    prop.mode === 'true' ? 'transform: scaleX(-1) scaleY(-1);' : ''};

  transition: all 0.3s;

  :hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(204, 204, 204)'};
  }
`;

export const Mode = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${ModeIcon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;
