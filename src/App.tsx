import { RecoilRoot } from 'recoil';
import { Menu } from './components';
import './style/font.css';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Menu />
      </div>
    </RecoilRoot>
  );
}

export default App;
