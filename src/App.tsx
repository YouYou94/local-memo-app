import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { Menu } from './components';
import './style/font.css';
import './App.css';

function App() {
  const [tap, setTap] = useState<number>(0);

  return (
    <RecoilRoot>
      <div className="App">
        <Menu setTap={setTap} />
      </div>
    </RecoilRoot>
  );
}

export default App;
