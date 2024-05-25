// src/components/Meals/MealItem/MealItemForm.js
import React, { useRef } from 'react';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor={'amount_' + props.id}>Amount</label>
        <input
          ref={amountInputRef}
          id={'amount_' + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button type="submit">+ADD</button>
    </form>
  );
};

export default MealItemForm;
