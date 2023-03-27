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

export const Item = styled.li`
  width: 15rem;
  height: 20rem;

  border: 1px solid rgb(204, 204, 204);

  cursor: pointer;
`;
