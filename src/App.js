import './App.css';
import InputBox from './InputBox.tsx';
import store from './store.ts';
import { Provider } from 'react-redux';
import PlayerComponent from './PlayerComponent.js';
import ReplayButton from './ReplayButton.tsx';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
      <div className="controls">
        <InputBox />
        <ReplayButton />
      </div>
      <div className="player">
        <PlayerComponent />
      </div>
      </Provider>
    </div>
  );
}

export default App;
