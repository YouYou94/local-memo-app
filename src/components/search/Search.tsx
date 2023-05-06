import React, { useState } from 'react';
import GOOGLE from '../../assets/search/google.png';
import NAVER from '../../assets/search/naver.png';
import YOUTUBE from '../../assets/search/youtube.png';
import DAUM from '../../assets/search/daum.png';
import {
  SearchBox,
  SearchBar,
  SearchEngine,
  EngineIcon,
  SearchInput,
} from './SearchStyled';
import { useRecoilValue } from 'recoil';
import { getModeState } from '../../recoil/selector';

const ENGINELIST = [GOOGLE, NAVER, YOUTUBE, DAUM];

export const Search = () => {
  const darkmode = useRecoilValue(getModeState);
  const [engineChange, setEngineChange] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleClickEngine = () => {
    if (engineChange >= 0) setEngineChange(engineChange + 1);

    if (engineChange >= ENGINELIST.length - 1) setEngineChange(0);
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
        case 2:
          window.location.href = `https://www.youtube.com/results?search_query=${searchValue}`;
          break;
        case 3:
          window.location.href = `https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=${searchValue}`;
          break;
        default:
          break;
      }
    }
  };

  return (
    <SearchBox>
      <SearchBar>
        <SearchEngine onClick={handleClickEngine}>
          <EngineIcon icon={ENGINELIST[engineChange]} />
        </SearchEngine>
        <SearchInput
          mode={darkmode}
          value={searchValue}
          onChange={handleChangeSearch}
          onKeyPress={handleKeyPressSearch}
          placeholder="Please Enter Your Search Term..."
        ></SearchInput>
      </SearchBar>
    </SearchBox>
  );
};
