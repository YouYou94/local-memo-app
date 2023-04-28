import HOME from '../../../assets/icon/home.png';
import NOTEADD from '../../../assets/icon/noteadd.png';
import NOTEEDIT from '../../../assets/icon/noteedit.png';
import { Nav, List, Item, Icon } from './SideBarStyled';

export const SideBar = () => {
  return (
    <Nav>
      <List>
        <Item>
          <Icon icon={HOME} />
        </Item>
        <Item>
          <Icon icon={NOTEADD} />
        </Item>
        <Item>
          <Icon icon={NOTEEDIT} />
        </Item>
      </List>
    </Nav>
  );
};
