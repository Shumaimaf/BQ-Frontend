import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Login from './Admin/pages/AdminLogin';
import Signup from './Admin/pages/AdminSignup';

export default function GuestNav() {
    return (
        < Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="#home">Guest Nav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                            <Login/>
                            <Signup/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
