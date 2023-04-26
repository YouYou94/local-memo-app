import styled from 'styled-components';

export const Box = styled.article`
  flex: 1;

  display: grid;
  justify-content: center;

  padding-bottom: 2rem;
  gap: 1.5rem;

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

  border: 1px solid rgb(204, 204, 204);
  border-radius: 0.5rem;
`;
