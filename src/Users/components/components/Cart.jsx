import React, { useState, useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';
import { Col, Row } from 'react-bootstrap';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false); // Cart visibility state

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // const addToCart = (product, quantity) => {
  //   const payload = {
  //     ...product,
  //     productQuantity: quantity,
  //     totalPrice: product.price * quantity
  //   };

  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: payload
  //   });

  //   setShow(true); // Open the cart in the off-canvas
  // };

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-black text-white position-relative"
      >
        <AiOutlineShoppingCart />
        {state.cart?.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Row>
              <Col style={{ fontFamily: "'Cinzel', serif"}} className='col-md-7' >
                <h2>Your cart</h2>
              </Col>
              <Col className='col-md-6'>
                <button style={{ fontFamily: "'Cinzel', serif"}}
                  className="ms-4 btn btn-outline-dark"
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </button>
              </Col>
            </Row>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart?.map((product, index) => (
            <CartItems key={index} product={product} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}