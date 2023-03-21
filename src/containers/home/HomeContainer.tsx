import { useState } from 'react';
import { Clock, Enrol, Template } from '../../components';

const COLUMN = 'column';

const HomeContainer = () => {
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');

  return (
    <Template direction={COLUMN}>
      <Clock />
      <Enrol setUser={setUser} />
    </Template>
  );
};

export default HomeContainer;
