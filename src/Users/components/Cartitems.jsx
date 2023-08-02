import React, { useReducer } from 'react';
import { Card } from 'react-bootstrap';

function CartItems({ product }) {
  const initialData = {
    count: 1
  };

  const myCallback = (state, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT_COUNTER':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, counterDispatch] = useReducer(myCallback, initialData);

  if (!product) {
    return null;
  }

  const totalPrice = product.price * state.count;

  return (
    <div className="card cart-item mt-5" key={product.id} style={{ fontFamily: "'Cinzel', serif"}}>
      <Card.Img
        variant="top"
        src={product.thumbnail}
        style={{ objectFit: 'cover', height: '20vh' }}
        className="card-image"
      />
      <div className="card-body">
        <div className="my-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-dark mx-3" onClick={() => counterDispatch({ type: 'INCREMENT_COUNTER' })}>
            +
          </button>
          {state.count}
          <button
            className="btn btn-dark mx-3"
            disabled={state.count > 1 ? false : true}
            onClick={() => counterDispatch({ type: 'DECREMENT_COUNTER' })}
          >
            -
          </button>
        </div>
        <h5 className="card-title cart-item-title">{product.title}</h5>
        <p className="card-text cart-item-price">{totalPrice}$</p>
      </div>
    </div>
  );
}

export default CartItems;
