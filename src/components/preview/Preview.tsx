import { Box, MemoBox } from './PreviewStyled';
import { Markdown } from './markdown/Markdown';

type PreviewProps = {
  state: string;
};

export const Preview = ({ state }: PreviewProps) => {
  return (
    <Box>
      <MemoBox>
        {state ? (
          <Markdown content={state} />
        ) : (
          <Markdown content={'__내용이 비어있습니다.__'} />
        )}
      </MemoBox>
    </Box>
  );
};
