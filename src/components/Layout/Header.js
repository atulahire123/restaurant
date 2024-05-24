// Header.js
import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import MealsSummary from '../Meals/MealsSummary';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton itemCount={props.itemCount} onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food' />
      </div>
      <MealsSummary />
    </Fragment>
  );
};

export default Header;
