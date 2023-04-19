import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  padding: 0 2rem;
`;

export const CoverBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;

  border: none;

  background-color: transparent;

  font-size: 1.2rem;
  font-weight: bold;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;
