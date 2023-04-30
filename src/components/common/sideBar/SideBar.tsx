import HOME from '../../../assets/icon/home.png';
import WRITE from '../../../assets/icon/noteadd.png';
import EDIT from '../../../assets/icon/noteedit.png';
import { Nav, List, Item, Icon } from './SideBarStyled';

export const SideBar = ({ setTap }: any) => {
  const handleClickHome = () => setTap(0);
  const handleClickWrite = () => setTap(1);
  const handleClickEdit = () => setTap(2);

  return (
    <Nav>
      <List>
        <Item onClick={handleClickHome}>
          <Icon icon={HOME} />
        </Item>
        <Item onClick={handleClickWrite}>
          <Icon icon={WRITE} />
        </Item>
        <Item onClick={handleClickEdit}>
          <Icon icon={EDIT} />
        </Item>
      </List>
    </Nav>
  );
};
