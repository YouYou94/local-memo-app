import { useState } from 'react';
import { Clock, Enrol, Manage, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  // 유저 정보 체크
  // 메뉴가 탭 화면 형식
  // Home은 시간과 노트 관리 화면을 보여준다.
  // Write 페이지가 따로 존재해야할듯
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');

  return (
    <Template direction={COLUMN}>
      <Clock />
      {user ? <Manage user={user} /> : <Enrol handleSetUser={setUser} />}
    </Template>
  );
};

export default HomeContainer;
