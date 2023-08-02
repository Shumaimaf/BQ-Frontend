import { React, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, json } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Cookies from 'js-cookie'
import './Login.css'
import axios from 'axios';


export default function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInemail, setLoggedInemail] = useState('');
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // const storedemail = localStorage.getItem('email');
  //   // const isLoggedIn = localStorage.getItem('loggedIn');

  //   // if (storedemail && isLoggedIn === 'true') {
  //   //   setLoggedInemail(storedemail);
  //   // }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password, email }
    console.log(payload)
    axios.post('http://localhost:3000/api/login', payload)
      .then(json => {
        console.log(json.data)
        Cookies.set('token', json.data.token)
      }
      )

      .catch(err => console.log(err))

    const enteredemail = e.target.email.value;
    const enteredPassword = e.target.password.value;

    setLoading(true);
    setTimeout(() => {
      console.log('email:', enteredemail);
      console.log('Password:', enteredPassword);

      setemail('');
      setPassword('');
      setLoading(false);

      Swal.fire({
        title: 'Login Successful!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      }).then(() => {
        setLoggedInemail(enteredemail);
        // localStorage.setItem('email', enteredemail);
        // localStorage.setItem('loggedIn', 'true'); 
      });
    }, 2000);
  };

  // const handleLogout = () => {
  //   setLoggedInemail('');
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('loggedIn');
  // };

  return (
    <div className="login-box container d-flex flex-column align-items-center">
      <h2 className="fs-2 text-center mb-1 align-items-center fw-semibold" style={{ fontFamily: "'Playfair'" }}>Login</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <div className="user-box mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          <label htmlFor="email" className="form-label fs-4">email</label>
          <input
            type="text"
            className="form-control"
            style={{ width: '300px' }}
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
