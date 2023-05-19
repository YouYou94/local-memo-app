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
    const mode = localStorage.getItem('mode');

    if (!notes) localStorage.setItem('memo', JSON.stringify([]));
    if (!mode) localStorage.setItem('mode', JSON.stringify(false));
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
