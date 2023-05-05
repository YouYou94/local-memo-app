import HOME from '../../../assets/icon/home.png';
import READ from '../../../assets/icon/read.png';
import { Nav, List, Item, Icon } from './SideBarStyled';

export const SideBar = ({ setTap }: any) => {
  const handleClickHome = () => setTap(0);
  const handleClickRead = () => setTap(1);

  return (
    <Nav>
      <List>
        <Item onClick={handleClickHome} title="홈| 검색">
          <Icon icon={HOME} />
        </Item>
        <Item onClick={handleClickRead} title="노트| 추가 조회 수정 삭제">
          <Icon icon={READ} />
        </Item>
      </List>
    </Nav>
  );
};
