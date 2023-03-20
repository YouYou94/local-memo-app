import styled from 'styled-components';

export const Box = styled.div<{ mode: boolean }>`
  position: absolute;

  right: -4rem;

  width: 4rem;
  height: 100vh;

  display: flex;

  border-left: 1px solid rgb(204, 204, 204);

  background-color: ${(prop) => (prop.mode ? 'white' : 'rgb(30, 30, 30)')};

  transition: 0.3s all;

  :hover {
    right: 0;
  }
`;

export const DisplayButton = styled.button<{ mode: boolean }>`
  position: absolute;

  top: 0.5rem;
  left: -2.5rem;

  width: 2.5rem;
  height: 6rem;

  border: 1px solid rgb(204, 204, 204);

  color: ${(prop) => (prop.mode ? 'black' : 'white')};
  background-color: ${(prop) => (prop.mode ? 'white' : 'rgb(30, 30, 30)')};
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
    background-color: rgb(204, 204, 204, 0.3);
  }
`;

interface MenuProps {
  icon: any;
  mode?: boolean;
}

export const MenuIcon = styled.div<MenuProps>`
  width: 2.5rem;
  height: 2.5rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  transform: scaleX(${(prop) => (prop.mode ? '' : -1)});

  transition: 0.5s all;
`;
