import { useState } from 'react';
import { Clock, Enrol, Manage, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  // 유저 정보 체크
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');

  console.log(user);

  return (
    <Template direction={COLUMN}>
      <Clock />
      {user ? <Manage user={user} /> : <Enrol handleSetUser={setUser} />}
    </Template>
  );
};

export default HomeContainer;
