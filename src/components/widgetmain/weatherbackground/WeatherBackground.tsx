import { ReactElement } from 'react';
import { Background } from './WeatherBackgroundStyled';

type WeatherBackgroundProps = {
  children: ReactElement[] | ReactElement | string;
};

export const WeatherBackground = ({ children }: WeatherBackgroundProps) => {
  return <Background>{children}</Background>;
};
