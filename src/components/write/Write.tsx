import {
  Box,
  WriteBox,
  WriteHeader,
  UploaderBox,
  TagBox,
  Tag,
  TagInput,
} from './WriteStyled';

export const Write = () => {
  return (
    <Box>
      <WriteBox>
        <WriteHeader>
          <UploaderBox></UploaderBox>
          <TagBox>
            <Tag>#안녕하세요</Tag>
            <TagInput />
          </TagBox>
        </WriteHeader>
      </WriteBox>
    </Box>
  );
};
