import styled from 'styled-components';

export const Layout = styled.div<{ mode: boolean }>`
  flex: 1;

  color: ${(prop) => (prop.mode ? 'black' : 'white')};
  background-color: ${(prop) =>
    prop.mode ? 'rgb(250, 250, 250);' : 'rgb(45, 45, 45);'};
`;
