import './App.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();
  const [name, setName] = useState('')

  const handleNameBlur = () => {
    // updateProfile()
  }

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePassBlur = event => {
    setPass(event.target.value);
  }

  const handleChange = (event) => {
    setRegistered(event.target.checked);
  }
  const handleSubmit = (event) => {

    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.stopPropagation();
      return;
    }
    if (!/(?=.*?[#?!@$^&*-])/.test(pass)) {
      setError('Password should contain atleest one special character')
      return;
    }
    setValidated(true);
    setError('');

    if (registered) {
      console.log(email, pass);
      signInWithEmailAndPassword(auth, email, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          setError(error.message);
          console.log(error);

        });

    } else {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((result) => {

          const user = result.user;
          setEmail('');
          setPass('');
          console.log(user);
          verifyEmail();
          setUserName();
        })
        .catch((error) => {
          // const errorCode = error.code;
          setError(error.message);
          console.log(error);

        });
    }


    event.preventDefault()
  }

  const handleForgetPass = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("reset Email sent");
      })
  }

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .than(() => {
        console.log('Updating Name');
      })
      .catch((error) => {
        // const errorCode = error.code;
        setError(error.message);
        console.log(error);

      });

  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification send..!');
      })
  }

  return (
    <div >
      <div className="registration mx-auto w-50 mt-5">
        <h2 className="text-primary">Please {registered ? 'Login' : 'Register'}</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleChange} type="checkbox" label="Already Registered" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button onClick={handleForgetPass} variant="link">Forget Password?</Button>
          <Button variant="primary" type="submit">
            {registered ? 'Login' : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
