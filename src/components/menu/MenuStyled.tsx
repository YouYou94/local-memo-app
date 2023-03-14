import styled from 'styled-components';
import DARKMODE from '../../assets/image/darkmode.png';

export const Box = styled.div<{ mode: boolean }>`
  position: absolute;

  right: 0;

  width: 4rem;
  height: 100vh;

  display: flex;

  border-left: 1px solid rgb(204, 204, 204);

  background-color: ${(prop) => (prop.mode ? 'white' : 'rgb(30, 30, 30)')};
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li<{ mode: boolean }>`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  translation: 1s all;

  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.mode ? 'rgb(45, 45, 45, 0.3)' : 'rgb(245, 245, 245, 0.3)'};
  }
`;

export const MenuIcon = styled.div<{ mode: boolean }>`
  width: 2.5rem;
  height: 2.5rem;

  background-image: url(${DARKMODE});
  background-repeat: no-repeat;
  background-size: cover;

  transform: scaleX(${(prop) => (prop.mode ? '' : -1)});

  transition: 0.5s all;

  ${MenuItem}:hover & {
  }
`;
