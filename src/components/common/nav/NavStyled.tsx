import styled from 'styled-components';

export const Box = styled.nav`
  width: 25rem;

  display: flex;
  flex-direction: column;

  border-right: 2px solid rgb(235, 235, 235);
  padding: 3rem 1rem 1rem 1rem;

  @media screen and (max-width: 1920px) {
    width: 20rem;
  }
  //   @media screen and (max-width: 1264px) {
  //     width: 5rem;
  //   }
`;

export const TitleBox = styled.div`
  width: 12rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1rem;

  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: 'Alkatra';
  font-size: 1.7rem;
`;

export const MenuList = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 3rem 1rem 0 1rem;

  gap: 0.5rem;
`;

export const MenuItem = styled.li`
  height: 3rem;

  display: flex;
  align-items: center;

  border-radius: 0.5rem;
  padding: 0 0.5rem;

  gap: 2rem;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245, 0.7);
  }
`;

export const MenuIcon = styled.div<{ icon?: any }>`
  width: 2rem;
  height: 2rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.5s all;

  ${MenuItem}:hover & {
    transform: scaleX(-1);
  }
`;

export const MenuName = styled.span`
  font-size: 1.1rem;
`;
