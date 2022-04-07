import './App.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
// import { Form } from 'react-bootstrap';
// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false)

  const handleNameBlur = event => {

  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  const handlePassBlur = e => {
    setPass(e.target.value);
  }
  const handleRegisteredChange = (event) => {
    setRegistered(event.target.checked);
  }
  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass)) {
      setError('Password Should Contain something')
      return;
    }
    setValidated(true);
    setError('')

    if (registered) {
      signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('')
          setPass('')
        })
        .catch(error => {
          console.error(error);
          setError(error.massage);
        })
    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('')
          setPass('')
          verifyEmail();
          setUserName('')
        })
        .catch(error => {
          console.error(error);
          setError(error.massage);
        })
    }
    // console.log('submitted', email, pass);

    event.preventDefault()
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email verification send');
      })
  }
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent');
      })
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        console.log('Updating Name');
      })
      .catch(error => {
        console.error(error);
        setError(error.massage);
      })
  }
  return (
    < div>
      <div className="registration w-50 mx-auto mt-2 ">
        <h2 className="text-primary">Please {registered ? "Login" : "Register"}!!!</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmitForm}>
          {!registered && <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your Name" required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          <Button onClick={handlePasswordReset} variant="link">Reset Password? Reset</Button>
          <Button variant="primary" type="submit">
            {registered ? "Login" : "Register"}
          </Button>
        </Form>
      </div>
    </div >
  );
}

export default App;

