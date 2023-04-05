import HOME from '../../../assets/image/home.png';
import DARKMODE from '../../../assets/image/darkmode.png';
import WRITE from '../../../assets/image/add.png';
import {
  Box,
  TitleBox,
  Title,
  MenuList,
  MenuItem,
  MenuIcon,
  MenuName,
} from './NavStyled';

export const Nav = ({ setTap }: any) => {
  const handleOnClickHome = () => setTap(0);

  const handleOnClickFeedWrite = () => setTap(1);

  return (
    <Box>
      <TitleBox>
        <Title>MLPDFeed</Title>
      </TitleBox>
      <MenuList>
        <MenuItem onClick={handleOnClickHome}>
          <MenuIcon icon={HOME} />
          <MenuName>홈</MenuName>
        </MenuItem>
        <MenuItem>
          <MenuIcon icon={DARKMODE} />
          <MenuName>화면 대비</MenuName>
        </MenuItem>
        <MenuItem onClick={handleOnClickFeedWrite}>
          <MenuIcon icon={WRITE} />
          <MenuName>일기 피드 작성</MenuName>
        </MenuItem>
      </MenuList>
    </Box>
  );
};
