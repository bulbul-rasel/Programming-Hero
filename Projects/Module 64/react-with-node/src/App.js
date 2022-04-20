import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value

    const user = { name, email };

    // post data to server

    fetch('http://localhost:5000/user', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => {
        const newUsers = [...users, data]
        setUsers(newUsers);
        console.log('Success:', data);
      });
  }

  return (
    <div className="App">
      <h1>My own Data: {users.length}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Enter Name' />
        <input type="text" name='email' placeholder='Enter Email' />
        <input type="submit" value="Add user" />
      </form>
      {
        users.map(user => <li key={user.id}>ID: {user.id} Name: {user.name} Email: {user.email}</li>)
      }
    </div>
  );
}

export default App;
