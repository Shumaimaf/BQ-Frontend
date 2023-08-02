import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Rename the import from 'react-bootstrap/form' to 'react-bootstrap/Form'
import Cookies from 'js-cookie';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';


export default function AdminLogin() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [loggedInemail, setLoggedInemail] = useState(""); // Added the state variable to track the logged-in email

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginUser = (e) => {
        e.preventDefault();
        const payload = { email, password };
        console.log(payload);
        axios.post('http://localhost:3000/api/login', payload)
            .then(json => {
                console.log(json.data);
                Cookies.set('token', json.data.token);
                setLoading(false); // Move setLoading(false) inside the .then block
                setLoggedInemail(email); // Set the logged-in email here
            })
            .catch(err => console.log(err));

        setLoading(true);

        setTimeout(() => {
            console.log('email:', email);
            console.log('Password:', password);

            setEmail(''); // Corrected the function name 'setemail' to 'setEmail'
            setPassword(''); // Corrected the function name 'setPassword' to 'setPassword'
            setLoading(false);

            Swal.fire({
                title: 'Login Successful!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }, 2000);
    };

    return (
        <>
            <Button onClick={handleShow} className='btn mx-1'>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={loginUser}>
                        <div className='mb-3'>
                            <label htmlFor='inputEmail' className='form-label'>
                                Email Address
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='inputEmail'
                                aria-describedby='emailHelp'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='passwordInput'>Password</label>
                            <input
                                type='password'
                                className='form-control'
                                id='passwordInput'
                                aria-describedby='emailHelp'
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
                        {loggedInemail ? (
                            <div>
                                <span>Hello, {loggedInemail}!</span>
                                <Button variant="link">Log Out</Button>
                            </div>
                        ) : null}
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}
