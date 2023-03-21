import { useState } from 'react';
import { Box, EnrolBox, EnrolInput } from './EnrolStyled';

type EnrolProps = {
  setUser: any;
};

export const Enrol = ({ setUser }: EnrolProps) => {
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

      localStorage.setItem('user', name);
      localStorage.setItem('manage', JSON.stringify([]));
      setUser(name);
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
