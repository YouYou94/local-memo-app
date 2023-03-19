import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 0.5rem;
`;

export const EnrolBox = styled.div`
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnrolInput = styled.input`
  width: 30rem;
  height: 3rem;

  border: none;
  border-bottom: 1px solid black;
  padding: 0 1rem;

  outline: none;

  font-size: 1.4rem;

  text-align: center;

  background-color: transparent;
`;
