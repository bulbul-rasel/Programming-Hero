import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <h5>New Component</h5>
      <Friend></Friend>
      <Person></Person>
      <Person></Person>

    </div>
  );
}
function Person() {
  return (
    <div className='person'>
      <h1>Shakib Al Hasan</h1>
      <p>Profession: Cricketer</p>
    </div>
  )
}
function Friend() {
  return (
    <div>
      <h3>Name: Kolimullah</h3>
      <p>Job: Badramo Kora</p>
    </div>
  )
}

export default App;
