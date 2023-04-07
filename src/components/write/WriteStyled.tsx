import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  padding: 2rem;
`;

export const WriteBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const WriteHeader = styled.header`
  height: 10rem;

  display: flex;
  flex-direction: column;
`;

export const UploaderBox = styled.div`
  height: 7rem;

  display: flex;
  align-items: flex-end;

  border-bottom: 1px solid rgb(205, 205, 205);
  padding-bottom: 1rem;
`;

export const UploaderButton = styled.input``;

export const UploaderImage = styled.img`
  width: auto;
  height: 5rem;
`;

export const TagBox = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(205, 205, 205);

  gap: 0.5rem;
`;

export const TagInput = styled.input`
  flex: 1;

  border: none;
  padding-left: 0.5rem;

  outline: none;
`;

export const Tag = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1.5rem;

  background-color: rgb(100, 75, 200, 0.7);
  color: white;

  font-size: 0.8rem;

  cursor: pointer;
`;

export const WriteArticle = styled.article`
  flex: 1;

  display: flex;
`;

export const WriteArea = styled.textarea`
  flex: 1;

  border: none;
  border-bottom: 1px solid rgb(204, 204, 204);
  padding: 1rem 0.2rem;

  font-size: 1.3rem;

  background-color: transparent;

  resize: none;

  outline: none;
`;
