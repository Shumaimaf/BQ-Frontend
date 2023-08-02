import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DiAtom } from 'react-icons/di';
import './Navbar.css';
import Cart from './Cart';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { RiAccountPinCircleLine } from 'react-icons/ri';

function NavScrollExample() {
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
            <div className='mx-1'>
            <DropdownButton
              as={ButtonGroup}
              id="account-dropdown"
              variant="black"
              title={<RiAccountPinCircleLine />}
              className="custom-dropdown link-text"
            >
              <Dropdown.Item eventKey="1">
                <Link className="dropdown-link" to="/login">
                  <span className="link-text" style={{ fontFamily: "'Cinzel', serif" }}>Login</span>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">
                <Link className="dropdown-link" to="/signup">
                  <span className="link-text" style={{ fontFamily: "'Cinzel', serif" }}>Sign Up</span>
                </Link>
              </Dropdown.Item>
            </DropdownButton>
            <Cart />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
