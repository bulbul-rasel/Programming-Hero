import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  const GithubSignIn = () => {
    signInWithPopup(auth, GitHubProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user)
      })
      .catch(error => {
        console.log('error', error);
      })
  }
  return (
    <div className="App">
      {
        user.uid ? <button onClick={handleSignOut}>Sign Out</button> :
          <>
            <button onClick={GoogleSignIn}>Google Sign In</button>
            <button onClick={GithubSignIn}>GitHub SignIn</button>
          </>
      }


      <h3>Name: {user.displayName}</h3>
      <p>I know your Email Address: {user.email}</p>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
