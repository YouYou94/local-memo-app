import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem;

  gap: 1rem;
`;

export const Header = styled.header`
  height: 5rem;

  display: flex;

  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const TitleInput = styled.input`
  flex: 1;

  border: none;

  font-size: 1.7rem;

  background-color: transparent;

  outline: none;
`;

export const Section = styled.section`
  flex: 1;

  display: flex;
`;

export const WriteArea = styled.textarea`
  flex: 1;

  border: none;

  font-size: 1.3rem;

  background-color: transparent;

  resize: none;

  outline: none;
`;

export const Footer = styled.footer`
  height: 3rem;
`;
