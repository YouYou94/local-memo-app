import { useEffect, useState } from 'react';
import { Box, FeedBox } from './FeedStyled';

export const Feed = () => {
  const [feedList, setFeedList] = useState<any>([]);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('feed') || '');

    if (storageData) setFeedList(storageData);
  }, []);

  return (
    <Box>
      {feedList?.map((feed: any, index: number) => {
        const { id, color, tag, content, time } = feed;

        return <FeedBox key={id}></FeedBox>;
      })}
    </Box>
  );
};
