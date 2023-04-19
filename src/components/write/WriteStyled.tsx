import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  padding: 0 2rem;
`;

export const WriteBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 3rem;

  display: flex;
  flex-direction: column;

  border-top: 1px solid rgb(205, 205, 205);
  border-bottom: 1px solid rgb(205, 205, 205);
`;

export const TagBox = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  gap: 0.5rem;
`;

export const TagInput = styled.input`
  flex: 1;

  border: none;
  padding-left: 0.5rem;

  outline: none;
`;

export const Tag = styled.div`
  height: 1.8rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1rem;

  background-color: rgb(100, 75, 200, 0.7);
  color: white;

  font-size: 0.8rem;

  cursor: pointer;
`;

export const Article = styled.article`
  flex: 1;

  display: flex;

  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const WriteArea = styled.textarea`
  flex: 1;

  border: none;
  padding: 1rem 0.2rem;

  font-size: 1.3rem;

  background-color: transparent;

  resize: none;

  outline: none;
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
