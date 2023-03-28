import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 0.5rem 2rem;

  gap: 1rem;
`;

export const Header = styled.header`
  height: 5rem;

  display: flex;

  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const TitleInput = styled.input<{ mode: string }>`
  flex: 1;

  border: none;

  font-size: 1.7rem;

  background-color: transparent;
  color: ${(prop) => (prop.mode === 'bright' ? 'black' : 'white')};

  outline: none;
`;

export const Nav = styled.nav`
  height: 2.5rem;

  display: flex;

  border-bottom: 1px solid rgb(204, 204, 204);

  gap: 1rem;
`;

export const MemoColorBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: rgb(204, 204, 204, 0.5);
  }
`;

export const MemoColor = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;

  border-radius: 50%;

  background-color: ${(prop) => prop.color};
`;

export const Section = styled.section`
  flex: 1;

  display: flex;
`;

export const WriteArea = styled.textarea<{ mode: string }>`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);

  font-size: 1.3rem;

  background-color: transparent;
  color: ${(prop) => (prop.mode === 'bright' ? 'black' : 'white')};

  resize: none;

  outline: none;
`;

export const Footer = styled.footer`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button<{ mode: string }>`
  width: 10rem;
  height: 3rem;

  border: 1px solid rgb(204, 204, 204);
  border-radius: 1rem;

  font-size: 1.2rem;

  background-color: transparent;
  color: ${(prop) => (prop.mode === 'bright' ? 'black' : 'white')};

  outline: none;

  :hover {
    background-color: rgb(204, 204, 204, 0.4);
  }
`;
