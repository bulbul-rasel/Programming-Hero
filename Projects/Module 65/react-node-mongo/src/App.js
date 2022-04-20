import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUsers from './Components/AddUsers/AddUsers';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
        <Route path='/user/add' element={<AddUsers></AddUsers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
