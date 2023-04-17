import { RecoilRoot } from 'recoil';
import { TopBar } from './components';
import MainContainer from './containers/MainContainer';
import './style/font.css';
import './App.css';

function App() {
  /* 나의 작고 소중한 일기 피드 앱 */
  /* My Little and Precious Diary Feed App */
  /* MLPDFeed */

  return (
    <RecoilRoot>
      <div className="App">
        <TopBar />
        <MainContainer />
      </div>
    </RecoilRoot>
  );
}

export default App;
