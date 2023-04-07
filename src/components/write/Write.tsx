import React, { useState } from 'react';
import {
  Box,
  WriteBox,
  WriteHeader,
  UploaderBox,
  UploaderButton,
  UploaderImage,
  TagBox,
  Tag,
  TagInput,
  WriteArticle,
  WriteArea,
} from './WriteStyled';

export const Write = () => {
  const [uploaderFileURL, setUploaderFileURL] = useState<string>('');
  const [uploaderFile, setUploaderFile] = useState<FileList | null>(null);

  const [tagValue, setTagValue] = useState<string>('');
  const [tagList, setTagList] = useState<any>([]);

  const [contentValue, setContentValue] = useState<string>('');

  const handleOnChangeUploaderFile = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const newFileURL = URL.createObjectURL(files[0]);

    setUploaderFileURL(newFileURL);
    setUploaderFile(files);
  };

  const handleOnClickImageRemove = () => {
    URL.revokeObjectURL(uploaderFileURL);
    setUploaderFileURL(''); // 렌더링 이미지 초기화
    setUploaderFile(null);
  };

  const handleOnChangeTagInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;

    setTagValue(value);
  };

  const handleOnPressKeyTagInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (tagValue[0] + tagValue[1] === '# ') {
        setTagList([...tagList, tagValue]);
      } else alert('"# 태그" 형식으로 태그를 입력하세요.');

      setTagValue('');
    }
  };

  const handleOnClickTag = (event: React.MouseEvent<HTMLDivElement>) => {
    const { id } = event.currentTarget;

    setTagList(
      tagList.filter((tag: string, index: number) => index !== Number(id)),
    );
  };

  const handleOnChangeWriteArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setContentValue(value);
  };

  return (
    <Box>
      <WriteBox>
        <WriteHeader>
          <UploaderBox>
            {uploaderFileURL ? (
              <UploaderImage
                src={uploaderFileURL}
                onClick={handleOnClickImageRemove}
                alt=""
              />
            ) : (
              <UploaderButton
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                onChange={handleOnChangeUploaderFile}
              />
            )}
          </UploaderBox>
          <TagBox>
            {tagList?.map((tag: string, index: number): any => {
              return (
                <Tag key={index} id={String(index)} onClick={handleOnClickTag}>
                  {tag}
                </Tag>
              );
            })}
            <TagInput
              value={tagValue}
              onChange={handleOnChangeTagInput}
              onKeyPress={handleOnPressKeyTagInput}
              placeholder="# 태그를 입력해주세요."
            />
          </TagBox>
        </WriteHeader>
        <WriteArticle>
          <WriteArea
            value={contentValue}
            onChange={handleOnChangeWriteArea}
            placeholder="오늘의 다이어리를 작성해보세요."
          />
        </WriteArticle>
      </WriteBox>
    </Box>
  );
};
