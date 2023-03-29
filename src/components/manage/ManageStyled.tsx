import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;

  padding: 2rem;
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

  cursor: pointer;

  gap: 1rem;
`;

export const ItemTitle = styled.h2``;

export const ItemMemo = styled.div``;
