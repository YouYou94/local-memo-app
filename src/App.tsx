import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { Menu } from './components';
import { HomeContainer, ManageContainer, WritingContainer } from './containers';
import './style/font.css';
import './App.css';

function App() {
  const [tap, setTap] = useState<number>(0);

  return (
    <RecoilRoot>
      <div className="App">
        <Menu setTap={setTap} />
        {tap === 0 ? <HomeContainer /> : <></>}
        {tap === 1 ? <WritingContainer setTap={setTap} /> : <></>}
        {tap === 2 ? <ManageContainer /> : <></>}
      </div>
    </RecoilRoot>
  );
}

export default App;
