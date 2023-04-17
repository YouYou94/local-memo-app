import HOME from '../../../assets/icon/home.png';
import NOTEADD from '../../../assets/icon/noteadd.png';
import NOTEEDIT from '../../../assets/icon/noteedit.png';
import {
  Layout,
  TitleBox,
  MenuBox,
  Box,
  Title,
  MenuItem,
  MenuIcon,
} from './TopBarStyled';

export const TopBar = () => {
  return (
    <Layout>
      <TitleBox>
        <Title>MLDPFEED</Title>
      </TitleBox>
      <MenuBox>
        <MenuItem title="홈으로돌아가기">
          <MenuIcon icon={HOME} />
        </MenuItem>
        <MenuItem title="다이어리추가하기">
          <MenuIcon icon={NOTEADD} />
        </MenuItem>
        <MenuItem title="다이어리수정하기">
          <MenuIcon icon={NOTEEDIT} />
        </MenuItem>
      </MenuBox>
      <Box></Box>
    </Layout>
  );
};
