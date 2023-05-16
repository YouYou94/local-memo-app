import styled from 'styled-components';
import Google from '../../../assets/search/google.png';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../../recoil';
import { useState } from 'react';

export const Search = () => {
  const darkmode = useRecoilValue(getModeState);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  const handleKeyPressSearch = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter')
      window.location.href = `https://www.google.co.kr/search?q=${searchValue}`;
  };

  return (
    <SearchBox mode={darkmode}>
      <SearchEngine />
      <SearchInput
        value={searchValue}
        onChange={handleChangeSearch}
        onKeyPress={handleKeyPressSearch}
        mode={darkmode}
      />
    </SearchBox>
  );
};

const SearchBox = styled.div<{ mode: string }>`
  width: 15rem;
  height: 2.5rem;

  display: flex;
  align-items: center;

  border-bottom: 2px solid rgb(204, 204, 204);

  cursor: pointer;
`;

const SearchEngine = styled.div`
  width: 1rem;
  height: 1rem;

  background-image: url(${Google});
  background-repeat: no-repeat;
  background-size: cover;

  user-select: none;
`;

const SearchInput = styled.input<{ mode: string }>`
  width: 10rem;

  flex: 1;

  border: none;
  padding: 0 1rem;

  background-color: transparent;
  font-size: 1rem;

  outline: none;

  cursor: pointer;
`;
