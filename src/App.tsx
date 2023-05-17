import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import './style/font.css';
import './App.css';
import { Router } from './router/Router';

function App() {
  /* 오프라인 메모 앱 */
  /* Off-Line Memo App */
  /* MWA */

  useEffect(() => {
    const notes = localStorage.getItem('memo');

    if (!notes) localStorage.setItem('memo', JSON.stringify({}));
  }, []);

  return (
    <RecoilRoot>
      <div className="App">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
