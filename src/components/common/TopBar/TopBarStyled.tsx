import styled from 'styled-components';

export const Layout = styled.header`
  position: fixed;
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: space-between;

  padding: 0 3rem;

  box-shadow: 0px 5px 15px -2px rgb(204, 204, 204);

  gap: 3rem;
`;

export const TitleBox = styled.div`
  width: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Orbitron';
`;

export const MenuBox = styled.ul`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export const Box = styled.div`
  width: 15rem;
`;

export const Title = styled.h1`
  cursor: pointer;
`;

export const MenuItem = styled.li`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const MenuIcon = styled.div<{ icon?: any }>`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;
