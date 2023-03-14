import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
import { Layout, NoteLayout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
  responsive?: boolean;
};

export const Template = ({ children }: TemplateProps) => {
  // 모드 변수
  const mode = useRecoilValue(getModeState);

  return <Layout mode={mode}>{children}</Layout>;
};

export const NoteTemplate = ({ children, responsive }: TemplateProps) => {
  return <NoteLayout responsive={responsive}>{children}</NoteLayout>;
};
