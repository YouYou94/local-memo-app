import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  border-right: 1px solid rgb(204, 204, 204);
`;

export const TitleBox = styled.article`
  height: 6rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    height: 3rem;
  }
`;

export const TitleInput = styled.input<{ mode: string }>`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);
  padding: 0 1rem;

  background-color: transparent;

  font-size: 2rem;

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};

  outline: none;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const WriteBox = styled.article`
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
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};

  resize: none;

  outline: none;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ButtonBox = styled.footer`
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
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;
