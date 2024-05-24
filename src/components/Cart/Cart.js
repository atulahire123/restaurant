// Cart.js
import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
};

export default Cart;
