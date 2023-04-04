import { ReactElement } from 'react';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
};

export const Template = ({ children }: TemplateProps) => {
  return <Layout>{children}</Layout>;
};
