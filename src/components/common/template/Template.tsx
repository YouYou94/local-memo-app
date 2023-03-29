import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil/selector';
import { Layout } from './TemplateStyled';

type TemplateProps = {
  children: ReactElement[] | ReactElement | string;
  direction?: string;
  manage?: string;
};

export const Template = ({ direction, manage, children }: TemplateProps) => {
  // 모드 변수
  const mode = useRecoilValue(getModeState);

  return (
    <Layout direction={direction} mode={mode} manage={manage}>
      {children}
    </Layout>
  );
};
