import { useState } from 'react';
import { Clock, Enrol, Greeting, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');

  return (
    <Template direction={COLUMN}>
      <Clock />
      {user ? <Greeting user={user} /> : <Enrol setUser={setUser} />}
    </Template>
  );
};

export default HomeContainer;
