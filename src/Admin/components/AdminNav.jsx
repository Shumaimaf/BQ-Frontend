import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function AdminNav() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Admin name</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Button className='btn btn-dark'>Logout</Button>
                </Container>
            </Navbar>
        </>
    )
}
export default AdminNav;
