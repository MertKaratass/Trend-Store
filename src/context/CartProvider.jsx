import { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingCatItemIndex = state.items.findIndex((item) => {
        item.id === action.item.id;
      });

      let updatedItems = [...state.items];

      if (existingCatItemIndex !== -1) {
        updatedItems[existingCatItemIndex] = {
          ...state.items[existingCatItemIndex],
          amount: state.items[existingCatItemIndex].amount + action.item.amount,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }

      updatedItems = [...state.items, action.item];
      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      const filterdItems = state.items.filter((item) => item.id !== action.id);
      const itemToRemove = state.items.find((item) => item.id === action.id);
      return {
        items: filterdItems,
        totalAmount: state.totalAmount - itemToRemove.price,
      };
    case "CLEAR":
      return defaultCartState;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispactCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispactCartAction({ type: "ADD", item });
    },
    removeItem: (id) => {
      dispactCartAction({ type: "REMOVE", id });
    },
    clearItem: () => {
      dispactCartAction({ type: "CLEAR" });
    },
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
