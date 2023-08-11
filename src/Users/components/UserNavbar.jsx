import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import './Navbar.css';
import Cart from './Cart';;
import { useContext } from 'react';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';

function NavScrollExample() {

  const { state, dispatch } = useContext(GlobalContext)

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
            <Link className="btn text-white d-flex align-items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
              profile
            </Link>
            <div className="d-flex">

              <button className="btn btn-dark"
                onClick={() => {
                  Cookies.remove('token')
                  dispatch({ type: "USER_LOGOUT" })
                }}
              >Sign Out</button>
            </div>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
