import styled from 'styled-components';
import DARKMODE from '../../assets/image/darkmode.png';

export const Box = styled.div`
  position: absolute;

  right: 0;

  width: 4rem;
  height: 100vh;

  display: flex;

  border-left: 1px solid rgb(204, 204, 204);

  background-color: white;
  //background-color: black;
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  translation: 1s all;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const MenuIcon = styled.div<{ mode: boolean }>`
  width: 3rem;
  height: 3rem;

  background-image: url(${DARKMODE});
  background-repeat: no-repeat;
  background-size: cover;

  transform: rotate(${(prop) => (prop.mode ? 0 : 180)}deg);

  transition: 0.5s all;

  ${MenuItem}:hover & {
  }
`;
