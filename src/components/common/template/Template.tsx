import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
};

export const Template = ({ children }: TemplateProps) => {
  const mode = useRecoilValue(getModeState);

  console.log(typeof mode);

  return <Layout mode={mode}>{children}</Layout>;
};
