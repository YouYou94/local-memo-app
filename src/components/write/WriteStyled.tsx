import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-right: 1px solid rgb(204, 204, 204);
`;

/* Header */
export const Header = styled.header`
  height: 6rem;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgb(205, 205, 205);
`;

export const TitleInput = styled.input<{ mode: string }>`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 0 1rem;

  background-color: transparent;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  outline: none;
`;

export const TagBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  gap: 0.5rem;
`;

export const TagInput = styled.input<{ mode: string }>`
  flex: 1;

  border: none;

  background-color: transparent;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  outline: none;
`;

export const Tag = styled.div`
  height: 1.8rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1rem;

  background-color: rgb(105, 165, 255);
  color: white;

  font-size: 0.8rem;

  cursor: pointer;
`;

/* Article */
export const Article = styled.article`
  flex: 1;

  display: flex;

  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const WriteArea = styled.textarea<{ mode: string }>`
  flex: 1;

  border: none;
  padding: 1rem;

  font-size: 1.1rem;

  background-color: transparent;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  resize: none;

  outline: none;
`;

/* Footer */
export const Footer = styled.footer`
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
`;

export const Button = styled.button<{ mode: string }>`
  width: 7rem;
  height: 2rem;

  border: none;

  background-color: transparent;

  font-size: 1.1rem;
  font-weight: bold;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  :hover {
    background-color: rgb(204, 204, 204);
  }
`;
