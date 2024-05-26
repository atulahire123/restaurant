import React from 'react';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      <CartItem name="Sushi" amount={2} price={12.99} />
      <CartItem name="Schnitzel" amount={1} price={16.5} />
      <CartItem name="Barbecue Burger" amount={3} price={12.99} />
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
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
