import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  items: [],
  clear: function () {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(items);
    }
  }, []);

  const clear = () => {
    setItems([]);
    localStorage.clear();
  };

  const cartValue = {
    items,
    clear,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};
