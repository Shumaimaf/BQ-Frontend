import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; // Rename the import from 'react-bootstrap/form' to 'react-bootstrap/Form'
import Cookies from 'js-cookie';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';

export default function AdminSignup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const SignupUser = (e) => {
        e.preventDefault();
        const payload = { email, password, username }
        console.log(payload)
        axios.post('http://localhost:3000/api/signup', payload)
            .then(json => {
                Cookies.set('token', json.data.token);
                setLoading(false); 
            })
            .catch(err => console.log(err));

        setLoading(true);

        setTimeout(() => {
            console.log('email:', email);
            console.log('Password:', password);

            setEmail(''); 
            setpassword(''); 
            setLoading(false);

            Swal.fire({
                title: 'Signup Successfully',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }, 2000);
    };

    return (
        <>
            <Button onClick={handleShow} className='btn mx-1'>
                SignUp
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={SignupUser}>
                        <div className='mb-3'>
                            <label htmlFor='User' className='form-label'>
                                Name
                            </label>
                            <input
                                type='text' // Change type to 'text'
                                className='form-control'
                                id='User'
                                aria-describedby='emailHelp'
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='exampleInputEmail' className='form-label'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleInputEmail'
                                aria-describedby='emailHelp'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='passwordInput'>Password</label>
                            <input
                                type='text'
                                className='form-control'
                                id='passwordInput'
                                aria-describedby='emailHelp'
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
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
                                'Submit'
                            )}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
