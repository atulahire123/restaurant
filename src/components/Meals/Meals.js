// src/components/Meals/Meals.js
import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals'; // Assuming you have this component

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onAddToCart={props.onAddToCart} />
    </React.Fragment>
  );
};

export default Meals;
