import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import Test from './Components/Test/Test';
function count(num) {
  console.log('Paici');
}
function App() {
  return (
    <div className="App">
      <Test count={count}></Test>
    </div>
  );
}


export default App;
