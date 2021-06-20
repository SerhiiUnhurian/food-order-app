import { useReducer } from 'react';
import CartContext from './cart-context';

const initialCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ITEM_ADDED') {
    const newItem = action.payload;
    const itemsCopy = [...state.items];
    const updatedTotalPrice = state.totalPrice + newItem.price * newItem.amount;
    const itemIndex = itemsCopy.findIndex(item => item.id === newItem.id);
    const foundItem = itemsCopy[itemIndex];

    if (foundItem) {
      foundItem.amount += newItem.amount;
    } else {
      itemsCopy.push(newItem);
    }

    return {
      items: itemsCopy,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === 'ITEM_REMOVED') {
    const itemId = action.payload;
    const itemsCopy = [...state.items];
    const itemIndex = itemsCopy.findIndex(item => item.id === itemId);
    const item = itemsCopy[itemIndex];
    const updatedTotalPrice = state.totalPrice - item.price;

    if (item.amount === 1) {
      itemsCopy.splice(itemId, 1);
    } else {
      item.amount -= 1;
    }

    return { items: itemsCopy, totalPrice: updatedTotalPrice };
  }

  return state;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  const handleAddItem = item => {
    dispatch({
      type: 'ITEM_ADDED',
      payload: item,
    });
  };

  const handleRemoveItem = itemId => {
    dispatch({
      type: 'ITEM_REMOVED',
      payload: itemId,
    });
  };

  const ctxValue = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
