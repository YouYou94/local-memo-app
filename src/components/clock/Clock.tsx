import { useEffect, useState } from 'react';
import {
  ClockBox,
  TimeBox,
  HourMinuteBox,
  HourMinuteLabel,
  DotLabel,
  AmpmSecondsBox,
  AmpmLabel,
  SecondsLabel,
} from './ClockStyled';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil';

export const Clock = () => {
  const darkmode = useRecoilValue(getModeState);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <ClockBox>
      <TimeBox>
        <HourMinuteBox>
          <HourMinuteLabel>
            {time.getHours() > 12
              ? String(time.getHours() - 12).padStart(2, '0')
              : String(time.getHours()).padStart(2, '0')}
          </HourMinuteLabel>
          <DotLabel>:</DotLabel>
          <HourMinuteLabel>
            {String(time.getMinutes()).padStart(2, '0')}
          </HourMinuteLabel>
        </HourMinuteBox>
        <AmpmSecondsBox>
          <AmpmLabel mode={darkmode}>
            {time.getHours() > 12 ? 'PM' : 'AM'}
          </AmpmLabel>
          <SecondsLabel>
            {String(time.getSeconds()).padStart(2, '0')}
          </SecondsLabel>
        </AmpmSecondsBox>
      </TimeBox>
    </ClockBox>
  );
};
