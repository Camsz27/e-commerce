import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext({
  items: [],
  clear: function () {},
  add: function () {},
  increaseQuantity: function () {},
  decreaseQuantity: function () {},
  total: function () {},
  deleteItem: function () {},
});

export const CartContextProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setItems(JSON.parse(items));
    }
  }, []);

  const clear = () => {
    setItems([]);
    localStorage.clear();
  };

  const isInCart = (product) => {
    for (const item of items) {
      if (item.product._id === product.product._id) {
        return true;
      }
    }
    return false;
  };

  const add = async (item) => {
    if (isInCart(item) === false) {
      await setItems((prev) => [...prev, item]);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      increaseQuantity(item);
    }
  };

  const increaseQuantity = async (product, quantity) => {
    let newItems = items.slice();
    for (const item of newItems) {
      if (item.product._id === product.product._id) {
        if (quantity) {
          item.quantity += quantity;
        } else {
          item.quantity += product.quantity;
        }
      }
    }
    await setItems(newItems);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const decreaseQuantity = async (product, quantity) => {
    let newItems = items.slice();
    for (const item of newItems) {
      if (item.product._id === product.product._id) {
        item.quantity -= quantity;
      }
    }
    await setItems(newItems);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const deleteItem = async (product) => {
    const newItems = items.filter(
      (item) => item.product._id !== product.product._id
    );
    await setItems(newItems);
    localStorage.setItem('items', JSON.stringify(items));
  };

  const total = () => {
    return items.length > 0
      ? items.reduce(
          (prev, curr) => prev + curr.product.price * curr.quantity,
          0
        )
      : 0;
  };

  const cartValue = {
    items,
    clear,
    add,
    increaseQuantity,
    decreaseQuantity,
    total,
    deleteItem,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
