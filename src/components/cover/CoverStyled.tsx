import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Alkatra';
  font-size: 4rem;

  user-select: none;
`;

export const ButtonBox = styled.div``;

export const Button = styled.label`
  margin-left: 10rem;
  border-radius: 1rem;
  padding: 0 1rem;

  font-family: 'Alkatra';
  font-size: 1rem;

  transition: all 0.5s;

  cursor: pointer;

  :hover {
    margin-left: 12rem;

    background-color: rgb(204, 204, 204, 0.3);
  }
`;
