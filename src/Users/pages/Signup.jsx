import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { json, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
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
        {/* <Form.Select style={{ fontFamily: "'Cinzel', serif" }} aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
          <option style={{ fontFamily: "'Cinzel', serif" }}>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Form.Select> */}

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
