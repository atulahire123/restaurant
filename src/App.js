// src/App.js
import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCartHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = prevItems.concat({ ...item, amount: 1 });
      }
      return updatedItems;
    });
  };

  const removeFromCartHandler = (id) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === id);
      const existingItem = prevItems[existingItemIndex];
      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = prevItems.filter((i) => i.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      }
      return updatedItems;
    });
  };

  const showCartHandler = () => {
    setIsCartVisible(true);
  };

  const hideCartHandler = () => {
    setIsCartVisible(false);
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <Fragment>
      <Header itemCount={cartItems.length} onShowCart={showCartHandler} />
      {isCartVisible && (
        <Cart
          items={cartItems}
          totalAmount={totalAmount}
          onRemoveItem={removeFromCartHandler}
          onAddItem={addToCartHandler}
          onClose={hideCartHandler}
        />
      )}
      <main>
        <Meals onAddToCart={addToCartHandler} />
      </main>
    </Fragment>
  );
}

export default App;
