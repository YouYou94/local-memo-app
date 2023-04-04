import styled from 'styled-components';

export const Box = styled.div`
  flex: 1;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: rgb(255, 255, 255);

    border-radius: 10px;
    border: 1px solid rgb(204, 204, 204);
  }

  &::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
  }
`;

export const FeedBox = styled.div`
  width: 25rem;
  height: 45rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 2rem 0;
`;

export const FeedHeader = styled.header`
  height: 3rem;

  display: flex;

  gap: 1rem;
`;

export const UserBox = styled.div`
  flex: 1;

  display: flex;

  gap: 0.5rem;
`;

export const UserIcon = styled.div<{ icon?: any }>`
  width: 2.5rem;
  height: 2.5rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const InfoBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding-left: 0.5rem;
`;

export const UserId = styled.span`
  flex: 1;

  cursor: pointer;

  :hover {
    color: rgb(45, 45, 45, 0.7);
  }
`;

export const EnrolTime = styled.span`
  flex: 1;
`;

export const ButtonBox = styled.div`
  width: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background-color: rgb(245, 245, 245, 0.7);
  }
`;

export const FeedArticle = styled.article`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedImage = styled.div<{ image?: any }>`
  flex: 1;

  background-image: url(${(prop) => prop.image});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FeedFooter = styled.footer`
  flex: 1;
`;
