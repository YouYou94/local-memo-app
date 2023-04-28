import styled from 'styled-components';

export const Nav = styled.nav`
  width: 4rem;

  display: flex;
  flex-direction: column;

  border-right: 1px solid rgb(204, 204, 204);
  padding: 1rem 0;
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;
`;

export const Item = styled.li`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const Icon = styled.div<{ icon?: any }>`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;
