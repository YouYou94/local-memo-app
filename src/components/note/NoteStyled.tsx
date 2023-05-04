import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgb(204, 204, 204);
  padding: 0 1rem;
`;

export const Milestone = styled.div`
  width: 3rem;
  height: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageLabel = styled.label``;

export const MilestoneButton = styled.button`
  border: none;

  background-color: transparent;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const Article = styled.article`
  flex: 1;

  display: flex;
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

export const NoteTitle = styled.h1`
  display: flex;
  align-items: center;
`;

export const NoteTime = styled.label`
  display: flex;
  align-items: center;

  font-size: 1rem;
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
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgb(205, 205, 205);
  padding: 0 1rem;
`;

export const Button = styled.button`
  width: 8rem;
  height: 2.5rem;

  border: none;

  background-color: transparent;

  font-size: 1.2rem;
  font-weight: bold;

  :hover {
    background-color: rgb(245, 245, 245);
  }
`;
