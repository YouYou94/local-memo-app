import { ReactElement } from 'react';
import { Layout } from './TemplateStyled';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
};

export const Template = ({ children }: TemplateProps) => {
  const darkmode = useRecoilValue(getModeState);

  return <Layout mode={darkmode}>{children}</Layout>;
};
