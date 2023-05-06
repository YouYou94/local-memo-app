import styled from 'styled-components';

export const ClockBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  user-select: none;
`;

export const TimeBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;

  padding-top: 13rem;
`;

export const HourMinuteBox = styled.div`
  width: 20rem;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const AmpmSecondsBox = styled.div`
  width: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HourMinuteLabel = styled.label`
  width: 8rem;

  font-family: 'KonkhmerSleokchher';
  font-size: 6rem;
`;

export const DotLabel = styled.label`
  padding-bottom: 1rem;

  font-family: 'KonkhmerSleokchher';
  font-size: 6rem;
`;

export const AmpmLabel = styled.label<{ mode: string }>`
  border-bottom: 1px solid
    ${(prop) =>
      prop.mode === 'bright' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'};

  font-family: 'KonkhmerSleokchher';
  font-size: 2rem;
`;

export const SecondsLabel = styled.label`
  font-family: 'KonkhmerSleokchher';
  font-size: 2rem;
`;
