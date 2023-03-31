import { RecoilRoot } from 'recoil';
import { useEffect, useState } from 'react';
import { Menu } from './components';
import { NoteManagerContainer, NoteWritingContainer } from './containers';
import './style/font.css';
import './App.css';

function App() {
  const [tap, setTap] = useState<number>(1);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('manage') || ''))
      localStorage.setItem('manage', JSON.stringify([]));
  }, []);

  /* 크롬 스토리지 */
  /*
  useEffect(() => {
    chrome.storage.sync.get(['manage'], function (items) {
      if (!items.manage) {
        chrome.storage.sync.set({ manage: JSON.stringify([]) }, function () {
          console.log('Value is set to ' + JSON.stringify([]));
        });
      }
    });
  }, []);
  */

  return (
    <RecoilRoot>
      <div className="App">
        <Menu setTap={setTap} />
        {tap === 0 ? <></> : <></>}
        {tap === 1 ? <NoteWritingContainer setTap={setTap} /> : <></>}
        {tap === 2 ? <NoteManagerContainer /> : <></>}
      </div>
    </RecoilRoot>
  );
}

export default App;
