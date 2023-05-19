import styled from 'styled-components';
import DeleteIcon from '../../assets/menu/delete.png';

export const Box = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin-top: 4rem;
  padding: 2rem 2rem 0 2rem;

  gap: 1rem;
`;

export const MemoContainer = styled.div`
  height: 10rem;

  display: flex;
  flex-direction: column;

  transition: all 0.3s;

  cursor: pointer;

  :hover {
    transform: translate(0, -0.2rem);
  }
`;

export const MemoBox = styled.div`
  height: 8rem;

  display: flex;

  border: 2px solid rgb(204, 204, 204);
  border-radius: 2rem;
  padding: 1rem 1rem 0.5rem 2rem;

  box-shadow: 0.1rem 0.1rem 0.5rem rgb(204, 204, 204);
`;

export const LetterBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  flex: 1;
`;

export const ContentBox = styled.div`
  flex: 2;

  text-overflow: ellipsis;

  overflow: hidden;
`;

export const Title = styled.h2`
  display: flex;

  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }
`;

export const Content = styled.label`
  white-space: pre-wrap;
`;

export const SettingBox = styled.div`
  width: 2rem;

  display: flex;
  justify-content: center;
`;

export const DeleteBox = styled.div<{ mode: string }>`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(204, 204, 204)' : ''};

  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(251, 251, 251)' : 'rgb(204, 204, 204)'};
  }
`;

export const Delete = styled.div`
  width: 1rem;
  height: 1rem;

  background-image: url(${DeleteIcon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DateBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 2rem;
`;

export const DateLabel = styled.label`
  font-family: 'Alkatra';
`;
