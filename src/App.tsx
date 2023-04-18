import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { TopBar } from './components';
import { EditContainer, HomeContainer, WriteContainer } from './containers';
import './style/font.css';
import './App.css';

function App() {
  /* 나의 작고 소중한 일기 피드 앱 */
  /* My Little and Precious Diary Feed App */
  /* MLPDFeed */
  const [tap, setTap] = useState<number>(0);

  return (
    <RecoilRoot>
      <div className="App">
        <TopBar setTap={setTap} />
        {/* Home */}
        {tap === 0 ? <HomeContainer /> : <></>}
        {/* Write */}
        {tap === 1 ? <WriteContainer /> : <></>}
        {/* Edit */}
        {tap === 2 ? <EditContainer /> : <></>}
      </div>
    </RecoilRoot>
  );
}

export default App;
