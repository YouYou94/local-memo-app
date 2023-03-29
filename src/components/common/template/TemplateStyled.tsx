import styled from 'styled-components';

export const Layout = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;

  color: ${(prop) => (prop.mode === 'bright' ? 'black' : 'white')};
  background-color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(250, 250, 250);' : 'rgb(45, 45, 45);'};
`;
