import { useRecoilValue } from 'recoil';
import { Box, MemoBox } from './PreviewStyled';
import { Markdown } from './markdown/Markdown';
import { getModeState } from '../../recoil';

type PreviewProps = {
  state: string;
};

export const Preview = ({ state }: PreviewProps) => {
  const mode = useRecoilValue(getModeState);

  return (
    <Box>
      <MemoBox mode={mode.toString()}>
        {state ? (
          <Markdown content={state} />
        ) : (
          <Markdown content={'__내용이 비어있습니다.__'} />
        )}
      </MemoBox>
    </Box>
  );
};
