import styled from 'styled-components';

export const SearchBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const SearchBar = styled.div`
  width: 35rem;
  height: 3rem;

  display: flex;
  align-items: center;

  border: 1px solid rgb(204, 204, 204);
  border-radius: 2rem;
  padding: 0 0.5rem;
`;

export const SearchEngine = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  cursor: pointer;

  :hover {
    background-color: rgb(250, 250, 250);
  }
`;

export const EngineIcon = styled.div<{ icon?: any }>`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${(prop) => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  padding: 0.2rem 1rem 0 1rem;

  background-color: transparent;
  font-size: 1.1rem;

  :focus {
    outline: none;
  }
`;
