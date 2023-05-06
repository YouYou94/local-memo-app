import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

/* Note */
export const NoteBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const NoteHeader = styled.div`
  height: 6rem;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgb(205, 205, 205);
`;

export const TitleTimeBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;

  padding: 0 1rem;

  border-bottom: 1px solid rgb(205, 205, 205);
`;

export const NoteTitle = styled.label`
  display: flex;
  align-items: center;
`;

export const NoteTime = styled.label`
  display: flex;
  align-items: center;

  font-size: 0.9rem;
`;

export const TagBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding: 0 1rem;

  gap: 0.5rem;
`;

export const Tag = styled.div`
  height: 1.8rem;

  display: flex;
  align-items: center;

  border-radius: 1rem;
  padding: 0 1rem;

  background-color: rgb(105, 165, 255);
  color: white;

  font-size: 0.8rem;

  cursor: pointer;
`;

export const NoteArticle = styled.div`
  flex: 1;

  display: flex;

  padding: 1rem;

  font-size: 1.1rem;

  border-bottom: 1px solid rgb(204, 204, 204);

  white-space: pre-wrap;
`;

export const NoteFooter = styled.div`
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 0 1rem;
`;

export const Button = styled.button<{ mode: string }>`
  width: 7rem;
  height: 2rem;

  border: none;

  background-color: transparent;

  font-size: 1.1rem;
  font-weight: bold;

  color: ${(prop) =>
    prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  :hover {
    background-color: rgb(204, 204, 204);
  }
`;
