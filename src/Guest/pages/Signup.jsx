import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { json, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Signup({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  const saveUserDataToLocalStorage = (username, isLoggedIn) => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirm Password', confirmPassword);
    localStorage.setItem('loggedIn', isLoggedIn.toString());
<<<<<<< HEAD:src/Guest/pages/Signup.jsx
=======
  };

  const handleSubmit = (e) => {

e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');

    Swal.fire({
      title: 'Login Successful!',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      saveUserDataToLocalStorage(username, true);
      setUser(true)
      navigate('/');
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage('');

    Swal.fire('Success', 'Sign up successful!', 'success').then(() => {
      setUsername('');
      setPassword('');
      setConfirmPassword('');

      saveUserDataToLocalStorage(username, true);
      setUser(true)

      navigate('/');
    });
  };


    
    e.preventDefault();
    const payload = { email, password, username }
    console.log(payload)
    axios.post('http://localhost:3000/api/signup', payload)
      .then(json => console.log(json.data))
      .catch(err => console.log(err))

    if (password !== confirmPassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);

      setLoading(false);

      Swal.fire('Success', 'Sign up completed!', 'success').then(() => {
        setUsername('');
        setPassword('');
        setConfirmPassword('');



        // localStorage.setItem('username', username); 
        // localStorage.setItem('loggedIn', 'true'); 

        // navigate('/');
      });
    }, 2000);
>>>>>>> e6d6f6c030395ae610c1c0528e1cd9474ff76ca0:src/Users/pages/Signup.jsx
  };

  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.preventDefault();
  //   console.log('Username:', username);
  //   console.log('Email:', email);
  //   console.log('Password:', password);

  //   setUsername('');
  //   setEmail('');
  //   setPassword('');
  //   setConfirmPassword('');
  //   setErrorMessage('');

  //   Swal.fire({
  //     title: 'Login Successful!',
  //     icon: 'success',
  //     timer: 1500,
  //     showConfirmButton: false
  //   }).then(() => {
  //     saveUserDataToLocalStorage(username, true);
  //     setUser(true)
  //     navigate('/');
  //   });
  // };


    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    Swal.fire('Success', 'Sign up successful!', 'success').then(() => {
      setUsername('');
      setPassword('');
      setConfirmPassword('');

      saveUserDataToLocalStorage(username, true);
      setUser(true)

      navigate('/');
    });
  };
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="fs-2 text-center mb-1 align-items-center fw-semibold" style={{ fontFamily: "'Playfair'" }}>Sign Up</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="mb-2">
          <label style={{ fontFamily: "'Cinzel', serif" }} htmlFor="username" className="form-label fs-4">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: '300px' }}
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label style={{ fontFamily: "'Cinzel', serif" }} htmlFor="username" className="form-label fs-4">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            style={{ width: '300px' }}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          <label htmlFor="password" className="form-label fs-4">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            style={{ width: '300px' }}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3" style={{ fontFamily: "'Cinzel', serif" }} >
          <label htmlFor="confirmPassword" className="form-label fs-4" style={{ width: '300px' }}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <Button style={{ fontFamily: "'Cinzel', serif" }} type="submit" className="btn btn-primary fs-5 my-3" disabled={loading}>
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
    </div>
  );
}
