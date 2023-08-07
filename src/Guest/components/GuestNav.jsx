import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import { Button } from 'react-bootstrap';
import Login from '../../Users/pages/Login';
import Signup from '../../Users/pages/Signup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function GuestNav() {
    return (
        <Navbar expand="lg" className="navbar bg-black">
            <Container fluid>
                <Link className="title text-decoration-none text-center fs-1 fw-semibold d-flex align-items-center text-white" to="/">
                    Easy Shopping <DiAtom />
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" className="navbar-dark" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mx-auto me-5 d-flex link-container fw-semibold">
                        <Link className="icon-link icon-1" to="/">
                            <span className="link-text">Home</span>
                        </Link>
                        <Link className="icon-link icon-1" to="/products/categories">
                            <span className="link-text">Categories</span>
                        </Link>
                        <Link className="icon-link icon-2" to="/products">
                            <span className="link-text">Products</span>
                        </Link>
                        <Link className="icon-link icon-2" to="/login">
                            <span className="link-text">Login</span>
                        </Link>
                        <Link className="icon-link icon-2" to="/signup">
                            <span className="link-text">Sign Up</span>
                        </Link>                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
