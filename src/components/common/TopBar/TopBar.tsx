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

export const TopBar = ({ setTap }: any) => {
  const handleOnClickHome = () => setTap(0);

  const handleOnClickAdd = () => setTap(1);

  const handleOnClickEdit = () => setTap(2);

  return (
    <Layout>
      <TitleBox>
        <Title>MLDPFEED</Title>
      </TitleBox>
      <MenuBox>
        <MenuItem title="홈으로돌아가기" onClick={handleOnClickHome}>
          <MenuIcon icon={HOME} />
        </MenuItem>
        <MenuItem title="다이어리추가하기" onClick={handleOnClickAdd}>
          <MenuIcon icon={NOTEADD} />
        </MenuItem>
        <MenuItem title="다이어리수정하기" onClick={handleOnClickEdit}>
          <MenuIcon icon={NOTEEDIT} />
        </MenuItem>
      </MenuBox>
      <Box></Box>
    </Layout>
  );
};
