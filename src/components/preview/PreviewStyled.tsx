import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
`;

export const MemoBox = styled.article<{ mode: string }>`
  flex: 1;

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;
