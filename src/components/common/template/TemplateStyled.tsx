import styled from 'styled-components';

interface LayoutProps {
  mode: boolean;
  direction?: string;
}

export const Layout = styled.div<LayoutProps>`
  flex: 1;

  display: flex;
  flex-direction: ${(prop) => prop.direction};

  color: ${(prop) => (prop.mode ? 'black' : 'white')};
  background-color: ${(prop) =>
    prop.mode ? 'rgb(250, 250, 250);' : 'rgb(45, 45, 45);'};
`;

export const NoteLayout = styled.div<{ responsive?: boolean }>`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 1rem;

  ${(prop) =>
    prop.responsive
      ? '@media screen and (max-width: 1024px) { display: none; }'
      : ''};
`;
