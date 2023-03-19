import styled from 'styled-components';

export const Box = styled.div`
  flex: 3;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5rem;
`;

export const List = styled.ul`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 20rem;
`;

export const Item = styled.li`
  width: 12rem;
  height: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid rgb(204, 204, 204);
  border-radius: 2rem;

  font-size: 2rem;
  font-style: italic;

  color: rgb(204, 204, 204);

  cursor: pointer;

  :hover {
    border: 1px solid black;
    color: black;
  }
`;
