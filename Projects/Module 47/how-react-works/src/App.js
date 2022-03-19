
import './App.css';
import Device from './Components/Device';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Device name='UPhone' price="13000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
