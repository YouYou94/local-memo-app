import styled from 'styled-components';

interface LayoutProps {
  mode: string;
  direction?: string;
}

export const Layout = styled.div<LayoutProps>`
  flex: 1;

  display: flex;
  flex-direction: ${(prop) => prop.direction};

  color: ${(prop) => (prop.mode === 'bright' ? 'black' : 'white')};
  background-color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(250, 250, 250);' : 'rgb(45, 45, 45);'};
`;
