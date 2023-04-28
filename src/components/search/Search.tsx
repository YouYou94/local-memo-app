import React, { useState } from 'react';
import GOOGLE from '../../assets/icon/google.png';
import NAVER from '../../assets/icon/naver.png';
import {
  Box,
  TimeBox,
  SearchBox,
  SearchBar,
  SearchEngine,
  EngineIcon,
  SearchInput,
} from './SearchStyled';

const ENGINELIST = [GOOGLE, NAVER];

export const Search = () => {
  const [engineChange, setEngineChange] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleClickEngine = () => {
    if (engineChange === 0) setEngineChange(engineChange + 1);
    else if (engineChange === ENGINELIST.length - 1) setEngineChange(0);
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  const handleKeyPressSearch = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    const { key } = event;

    if (key === 'Enter') {
      switch (engineChange) {
        case 0:
          window.location.href = `https://www.google.co.kr/search?q=${searchValue}`;
          break;
        case 1:
          window.location.href = `https://search.naver.com/search.naver?query=${searchValue}`;
          break;
        default:
          break;
      }
    }
  };

  return (
    <Box>
      <TimeBox></TimeBox>
      <SearchBox>
        <SearchBar>
          <SearchEngine onClick={handleClickEngine}>
            <EngineIcon icon={ENGINELIST[engineChange]} />
          </SearchEngine>
          <SearchInput
            value={searchValue}
            onChange={handleChangeSearch}
            onKeyPress={handleKeyPressSearch}
            placeholder="Please Enter Your Search Term..."
          ></SearchInput>
        </SearchBar>
      </SearchBox>
    </Box>
  );
};
