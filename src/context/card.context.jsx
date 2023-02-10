import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const delCartItem = (cartItems, productToDel) => {
  const onlyOneItem = cartItems.find(
    (cartItem) => cartItem.id === productToDel.id && productToDel.quantity === 1
  );

  if (onlyOneItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDel.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToDel.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cardCount: 0,
  total: 0,
  addItemToCart: () => {},
  delItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cardCount, setCardCounts] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCardCounts(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const delItemFromCart = (productToDel) => {
    setCartItems(delCartItem(cartItems, productToDel));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    delItemFromCart,
    clearItemFromCart,
    cartItems,
    cardCount,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
