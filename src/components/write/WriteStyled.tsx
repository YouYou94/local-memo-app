import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;

  padding: 2rem;
`;

export const WriteBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const WriteHeader = styled.header`
  height: 8rem;

  display: flex;
  flex-direction: column;
`;

export const UploaderBox = styled.div`
  flex: 1;
`;

export const TagBox = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;
`;

export const TagInput = styled.input`
  flex: 1;

  border: none;

  outline: none;
`;

export const Tag = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  border-radius: 1.5rem;
  padding: 0 1rem;

  background-color: rgb(100, 75, 200, 0.7);
  color: white;
`;
