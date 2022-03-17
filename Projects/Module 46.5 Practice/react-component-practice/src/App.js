
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Brahombaria" special="Kopa Kupi"></District>
      <District name="Cumilla" special="Moyna Moti"></District>
      <District name="Noakhali" special="Bivag Chai"></District>
      <District name="Barishal" special="Khatar Gatti"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'aqua',
  color: 'red',
  margin: '10px',
  borderRadius: '20px',
  padding: '10px'
}
const postStyle = {
  backgroundColor: 'salmon',
  color: 'purple',
  margin: '10px',
  borderRadius: '20px',
  padding: '10px'
}
function LoadPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title}
          body={post.body}
          key={post.id}
        ></Post>)
      }
    </div>
  )
}
function Post(props) {
  return (
    <div style={postStyle}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    setPower(power * 2)
  }
  return (
    <div style={districtStyle}>
      <h3>Epic District Name: {props.name}</h3>
      <p>Specaility: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the Power</button>
    </div>
  )
}

export default App;
