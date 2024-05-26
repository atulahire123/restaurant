import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      <li className={classes['cart-item']}>
        <div>
          <h2>Sushi</h2>
          <div className={classes.summary}>
            <span className={classes.price}>$12.99</span>
            <span className={classes.amount}>x 2</span>
          </div>
        </div>
      </li>
      <li className={classes['cart-item']}>
        <div>
          <h2>Schnitzel</h2>
          <div className={classes.summary}>
            <span className={classes.price}>$16.50</span>
            <span className={classes.amount}>x 1</span>
          </div>
        </div>
      </li>
      <li className={classes['cart-item']}>
        <div>
          <h2>Barbecue Burger</h2>
          <div className={classes.summary}>
            <span className={classes.price}>$12.99</span>
            <span className={classes.amount}>x 3</span>
          </div>
        </div>
      </li>
    </ul>
  );

  return (
    <div className={classes.cart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$76.47</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
