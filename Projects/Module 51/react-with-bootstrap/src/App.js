import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGrp from './components/CardGrp/CardGrp';

function App() {
  return (
    <div className="App">

      <h1>This is React Bootstrap</h1>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <br />
      <Button variant='danger'>My Button</Button>
      <CardGrp></CardGrp>
    </div>
  );
}

export default App;
