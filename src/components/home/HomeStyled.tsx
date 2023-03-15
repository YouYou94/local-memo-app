import styled from 'styled-components';

export const Box = styled.div<{ align: string }>`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-${(prop) => prop.align};

  padding: 2rem;
`;
