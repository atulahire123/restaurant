// src/components/Meals/MealItem/MealItem.js
import React from 'react';
import Card from '../../UI/Card';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    props.onAddToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <Card>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </Card>
    </li>
  );
};

export default MealItem;
