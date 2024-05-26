import React from 'react';
import MealItem from './MealItem/MealItem';
import MealsSummary from './MealsSummary'; // Import MealsSummary
import classes from './Meals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary /> {/* Add MealsSummary component */}
      <section className={classes.meals}>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              onAddToCart={props.onAddToCart} // Ensure the prop is passed correctly
            />
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
};

export default Meals;
