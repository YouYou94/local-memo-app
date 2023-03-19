import { useState } from 'react';
import { Clock, Enrol, Manage, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  // 유저 정보 체크
  const [user, setUser] = useState<any>(null);

  return (
    <Template direction={COLUMN}>
      <Clock />
      {user ? <Manage /> : <Enrol handleSetUser={setUser} />}
    </Template>
  );
};

export default HomeContainer;
