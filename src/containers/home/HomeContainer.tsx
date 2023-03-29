import { useState } from 'react';
import { Clock, Enrol, Greeting, Template } from '../../components';
import { Box } from './HomeContainerStyled';

const HomeContainer = () => {
  const [user, setUser] = useState<string>(localStorage.getItem('user') || '');

  return (
    <Template>
      <Box>
        <Clock />
        {user ? <Greeting user={user} /> : <Enrol setUser={setUser} />}
      </Box>
    </Template>
  );
};

export default HomeContainer;
