import styled from 'styled-components';

export const Box = styled.article`
  flex: 1;

  display: grid;
  justify-content: center;

  padding-bottom: 2rem;
  gap: 2rem;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeedBox = styled.div`
  aspect-ratio: 3 / 4;

  display: flex;
  flex-direction: column;

  border: 1px solid rgb(204, 204, 204);

  transition: 0.2s all;

  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

export const FeedHeader = styled.div`
  height: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
`;

export const FeedSettingBox = styled.div`
  flex: 1;
`;

export const FeedSettingButton = styled.button`
  border: none;

  background-color: transparent;

  :hover {
    color: rgb(105, 165, 255);
  }
`;

export const FeedTime = styled.label`
  font-size: 0.8rem;
`;

export const FeedContent = styled.div<{ color: string }>`
  flex: 1;

  padding: 0.5rem;

  background-color: ${(prop) => prop.color};

  white-space: pre-wrap;
`;

export const FeedFooter = styled.div`
  height: 2.5rem;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  gap: 1rem;
`;

export const FeedTag = styled.label`
  font-size: 0.8rem;
`;
