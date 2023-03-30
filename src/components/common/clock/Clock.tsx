import { useEffect, useState } from 'react';
import { Box, TimeBox, TimeSpan, ColonSpan } from './ClockStyled';

export const Clock = () => {
  const [time, setTime] = useState<any>(new Date());
  const hour = String(time.getHours()).padStart(2, '0');
  const minute = String(time.getMinutes()).padStart(2, '0');
  const second = String(time.getSeconds()).padStart(2, '0');

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Box>
      <TimeBox>
        <TimeSpan>{hour}</TimeSpan>
        <ColonSpan>:</ColonSpan>
        <TimeSpan>{minute}</TimeSpan>
        <ColonSpan>:</ColonSpan>
        <TimeSpan>{second}</TimeSpan>
      </TimeBox>
    </Box>
  );
};
