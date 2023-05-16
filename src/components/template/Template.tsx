import styled from 'styled-components';

export const FlexTemplate = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(35, 35, 35)' : 'rgb(255, 255, 255)'};
`;

export const FlexColumnTemplate = styled(FlexTemplate)`
  flex-direction: column;
`;
