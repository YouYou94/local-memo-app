import {
  Box,
  FeedBox,
  FeedHeader,
  UserBox,
  UserIcon,
  InfoBox,
  UserId,
  EnrolTime,
  ButtonBox,
  FeedArticle,
  FeedImage,
  FeedFooter,
} from './FeedStyled';

export const Feed = () => {
  //const feedList = null;

  const feedList = localStorage.getItem('image');

  console.log(feedList);

  return (
    <Box>
      {feedList ? <></> : <>존재하는 피드가 없습니다.</>}
      <FeedBox>
        <FeedHeader>
          <UserBox>
            <UserIcon />
            <InfoBox>
              <UserId>id</UserId>
              <EnrolTime>time</EnrolTime>
            </InfoBox>
          </UserBox>
          <ButtonBox>버튼</ButtonBox>
        </FeedHeader>
        <FeedArticle>
          <FeedImage src={String(feedList)} />
        </FeedArticle>
        <FeedFooter>일기 내용 들어가기</FeedFooter>
      </FeedBox>
      <FeedBox></FeedBox>
      <FeedBox></FeedBox>
      <FeedBox></FeedBox>
    </Box>
  );
};
