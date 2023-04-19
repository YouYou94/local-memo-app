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

export const Article = styled.article`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgb(204, 204, 204);
`;

export const PreviewBox = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Preview = styled.div`
  width: 48rem;

  aspect-ratio: 16 / 9;
`;

export const SettingBox = styled.div`
  flex: 1;
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
