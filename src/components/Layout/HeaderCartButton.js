import React, { useContext } from "react";
import cartBtn from './HeaderCartButton.module.css';
import CartIcon from "../../components/Cart/CartIcon";
import CartContext from "../../components/Store/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={cartBtn.button} onClick={props.onClick}>
      <span className={cartBtn.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartBtn.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
