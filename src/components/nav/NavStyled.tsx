import styled from 'styled-components';

export const NavBox = styled.nav<{ mode: string }>`
  position: fixed;

  width: 100%;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;
  border-bottom: 1px solid rgb(204, 204, 204);

  background-color: ${(prop) =>
    prop.mode === 'true' ? 'rgb(35, 35, 35)' : 'rgb(251, 251, 251)'};

  @media screen and (max-width: 1024px) {
    height: 3rem;
  }
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
  width: 2.5rem;
  height: 2.5rem;

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

  @media screen and (max-width: 1024px) {
    width: 1.8rem;
    height: 1.8rem;
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

  @media screen and (max-width: 1024px) {
    width: 1rem;
    height: 1rem;
  }
`;
