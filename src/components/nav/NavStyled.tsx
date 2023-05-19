import styled from 'styled-components';

export const NavBox = styled.nav`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 2rem;
`;

export const TitleBox = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: 'Alkatra';

  user-select: none;
`;

export const MenuBox = styled.ul`
  display: flex;

  gap: 1rem;
`;

export const Menu = styled.li<{ mode: string }>`
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(204, 204, 204)' : 'rgb(235, 235, 235)'};

  cursor: pointer;

  :hover {
    background-color: ${(prop) =>
      prop.mode === 'true' ? 'rgb(251, 251, 251)' : 'rgb(204, 204, 204)'};
  }
`;

export const Mode = styled(Menu)`
  transition: all 0.3s;

  ${(prop) =>
    prop.mode === 'true' ? 'transform: scaleX(-1) scaleY(-1);' : ''};
`;

export const MenuIcon = styled.div<{ iconUrl: string }>`
  width: 1.5rem;
  height: 1.5rem;

  background-image: url(${(prop) => prop.iconUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;
