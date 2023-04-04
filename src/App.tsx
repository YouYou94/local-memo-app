import { RecoilRoot } from 'recoil';
import './style/font.css';
import './App.css';

function App() {
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
      <div className="App"></div>
    </RecoilRoot>
  );
}

export default App;
