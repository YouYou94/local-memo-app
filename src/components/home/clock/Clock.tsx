import { useEffect, useState } from 'react';
import { Box } from '../HomeStyled';

const END = 'end';

export const Clock = () => {
  const [time, setTime] = useState<any>(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <Box align={END}>{time.getSeconds()}</Box>;
};
