import styled from 'styled-components';

export const Layout = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;
  flex-direction: column;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};
  background-color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};
`;
