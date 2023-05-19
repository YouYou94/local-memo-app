import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;

  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MemoBox = styled.article<{ mode: string }>`
  flex: 1;

  padding: 4rem 1rem 1rem 1rem;

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;
