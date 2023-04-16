import { useState } from 'react';
import { Feed, Nav, Template, Write } from '../components';

const MainContainer = () => {
  const [tap, setTap] = useState<number>(0);

  return (
    <Template>
      <Nav setTap={setTap} />
      {tap === 0 ? <Feed /> : <></>}
      {tap === 1 ? <Write setTap={setTap} /> : <></>}
    </Template>
  );
};

export default MainContainer;
