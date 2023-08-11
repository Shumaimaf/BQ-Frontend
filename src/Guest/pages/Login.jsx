import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { GlobalContext } from '../../Context/context';

export default function Login(setUser) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loggedInemail, setLoggedInemail] = useState('');
  const { state, dispatch } = useContext(GlobalContext);

  const saveUserDataToLocalStorage = (username, isLoggedIn) => {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirm Password', confirmPassword);
    localStorage.setItem('loggedIn', isLoggedIn.toString());
  };

  const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const response = await axios.post('http://localhost:3000/api/login', {
  //       email,
  //       password,
  //     });

  //     localStorage.setItem('token', response.data.token);
  //     console.log(response)
  //     dispatch({
  //       type: 'USER_LOGIN',
  //       token: response.data.token,
  //     });

  //     setLoading(false);

  //     Swal.fire({
  //       title: 'Login Successful!',
  //       text: `Welcome, ${email}!`,
  //       icon: 'success',
  //       timer: 1500,
  //       showConfirmButton: false,
  //     }).then(() => {
  //       setLoggedInemail(email);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //     Swal.fire({
  //       title: 'Login Failed',
  //       text: 'An error occurred while logging in. Please try again.',
  //       icon: 'error',
  //       timer: 3000,
  //       showConfirmButton: false,
  //     });
  //   }
  // };



    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  

    setUsername('');
    setEmail('');
    setPassword('');
    
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

  return (
    <div className="login-box container d-flex flex-column align-items-center">
      <h2 className="fs-2 text-center mb-1 align-items-center fw-semibold" style={{ fontFamily: "'Playfair'" }}>Login</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="user-box mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          <label htmlFor="email" className="form-label fs-4">Email</label>
          <input
            type="text"
            className="form-control"
            style={{ width: '300px' }}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-box mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          <label htmlFor="password" className="form-label fs-4">Password</label>
          <input
            type="password"
            className="form-control"
            style={{ width: '300px' }}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button style={{ fontFamily: "'Cinzel', serif" }} type="submit" className="btn btn-primary fs-5" disabled={loading}>
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
            'Login'
          )}
        </Button>
      </form>
      {loggedInemail ? (
        <div>
          <span>Hello, {loggedInemail}!</span>
          <Button variant="link">Log Out</Button>
        </div>
      ) : (
        <div>
          <span style={{ fontFamily: "'Cinzel', serif" }}>Need an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </div>
  );
}
