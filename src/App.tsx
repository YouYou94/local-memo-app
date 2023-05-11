import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';
import { SideBar } from './components';
import { NoteContainer, HomeContainer, TodoContainer } from './containers';
import './style/font.css';
import './App.css';

function App() {
  /* 나의 위젯 앱 */
  /* My Widget App */
  /* MWA */
  const [tap, setTap] = useState<number>(0);

  useEffect(() => {
    const note = localStorage.getItem('note');

    if (!note) localStorage.setItem('note', JSON.stringify({}));
  }, []);

  return (
    <RecoilRoot>
      <div className="App">
        <SideBar setTap={setTap} />
        {tap === 0 ? <HomeContainer /> : <></>}
        {tap === 1 ? <NoteContainer /> : <></>}
        {tap === 2 ? <TodoContainer /> : <></>}
      </div>
    </RecoilRoot>
  );
}

export default App;
