import { RecoilRoot } from 'recoil';
import { useState } from 'react';
import { TopBar } from './components';
import MainContainer from './containers/MainContainer';
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
        <MainContainer tap={tap} />
      </div>
    </RecoilRoot>
  );
}

export default App;
