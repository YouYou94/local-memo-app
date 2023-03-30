import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';
import { Menu } from './components';
import { NoteManagerContainer, NoteWritingContainer } from './containers';
import './style/font.css';
import './App.css';

function App() {
  const [tap, setTap] = useState<number>(1);

  useEffect(() => {
    if (!localStorage.getItem('manage'))
      localStorage.setItem('manage', JSON.stringify([]));
  }, []);

  return (
    <RecoilRoot>
      <div className="App">
        <Menu setTap={setTap} />
        {tap === 0 ? <NoteWritingContainer setTap={setTap} /> : <></>}
        {tap === 1 ? <NoteManagerContainer /> : <></>}
      </div>
    </RecoilRoot>
  );
}

export default App;
