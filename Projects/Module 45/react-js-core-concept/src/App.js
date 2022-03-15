import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// const singers = [
//   { name: 'Dr Mahfuz', joib: 'singer' },
//   { name: 'Eva Rahman', joib: 'singer2' },
//   { name: 'Morich', joib: 'Agun e=r agun' },
//   { name: 'Hero Alam', joib: 'Tending' }
// ]

function App() {
  // const nayoks = ['BappaRaz', 'Shapik Khan', 'Kuber', 'Jashim', 'Jayed Khan']
  return (
    <div className="App">
      {/* //     {
        nayoks.map(nayok => <li>Name :{nayok}</li>)
      }
  //     {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
  //     {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
  //     <Person name={nayoks[0]} naika='Nai re Mama'></Person>
  //     <h5>New Component</h5>
  //     <Friend></Friend>
  //     <h5>New Component</h5>
  //     <Person name={nayoks[1]} naika='Apu Khan'></Person>
  //     <Person></Person> */}

      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>

    </div >
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '5px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(30)

  const increaseCount = () =>
    setCount(count + 1);
  const decreaseCount = () =>
    setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>decrease </button>
    </div>
  )
}

// function Person(props) {
//   console.log(props);
//   return (
//     <div className='person'>
//       <h1>{props.name}</h1>
//       <p>{props.naika} </p>
//     </div>
//   )
// }
// function Friend() {
//   return (
//     <div>
//       <h3>Name: Kolimullah</h3>
//       <p>Job: Badramo Kora</p>
//     </div>
//   )
// }

export default App;
