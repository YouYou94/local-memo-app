import styled from 'styled-components';

export const FlexTemplate = styled.div<{ mode: string }>`
  flex: 1;

  display: flex;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(35, 35, 35)' : 'rgb(251, 251, 251)'};

  color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'};

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 20%;
    background: rgb(255, 255, 255);

    border-radius: 10px;
    border: 1px solid rgb(204, 204, 204);
  }

  &::-webkit-scrollbar-track {
    background: ${(prop) =>
      prop.mode === 'true' ? 'rgb(35, 35, 35)' : 'rgb(251, 251, 251)'};
  }
`;

export const FlexColumnTemplate = styled(FlexTemplate)`
  flex-direction: column;
`;
