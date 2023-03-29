import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;

  margin: 2rem;
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  gap: 2rem;
`;

export const Item = styled.li<{ color: string }>`
  width: 15rem;
  height: 20rem;

  display: flex;
  flex-direction: column;

  border: 1px solid rgb(204, 204, 204);
  padding: 1rem;

  background-color: ${(prop) => prop.color};

  transition: all 0.5s;

  cursor: pointer;

  gap: 1rem;

  :hover {
    transform: translate(0.3rem, -0.3rem);
  }
`;

export const ItemTitle = styled.h2``;

export const ItemMemo = styled.div``;
