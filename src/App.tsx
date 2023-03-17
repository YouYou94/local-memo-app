import Router from './router/Router';
import { RecoilRoot } from 'recoil';
import './style/font.css';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
