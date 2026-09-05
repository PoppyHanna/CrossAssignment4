import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, size, quantity, price) => {
    const cartItem = {
      ...product,
      size,
      quantity,
      price,
    };

    setCartItems(prevItems => [...prevItems, cartItem]);
  };

  const removeFromCart = indexToRemove => {
    setCartItems(prevItems =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
