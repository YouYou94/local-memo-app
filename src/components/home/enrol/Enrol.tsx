import { useState } from 'react';
import { Box, EnrolBox, EnrolInput } from './EnrolStyled';

type EnrolProps = {
  handleSetUser: any;
};

export const Enrol = ({ handleSetUser }: EnrolProps) => {
  const [name, setName] = useState<string>('');

  const onChangeNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const onKeyPressNameInput = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      if (!name) {
        alert('이름을 입력해주세요!');
        return;
      }

      const object = {
        name: name,
        manage: [],
      };

      localStorage.setItem('user', JSON.stringify(object));
      handleSetUser(object);
      setName('');
    }
  };

  return (
    <Box>
      <EnrolBox>
        <EnrolInput
          value={name}
          onChange={onChangeNameInput}
          onKeyPress={onKeyPressNameInput}
          placeholder="What your name?"
        />
      </EnrolBox>
    </Box>
  );
};
