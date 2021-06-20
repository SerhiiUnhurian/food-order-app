import { useContext } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../ui/Modal';
import clss from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItem = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const handleRemoveItem = id => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={clss['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={() => handleAddItem(item)}
          onRemove={() => handleRemoveItem(item.id)}
        />
      ))}
    </ul>
  );

  const formattedTotalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={clss.total}>
        <span className={clss.total}>Total price:</span>
        <span>{formattedTotalPrice}</span>
      </div>
      <div className={clss.actions}>
        <button onClick={onClose} className={clss['button--alt']}>
          Close
        </button>
        {hasItems && <button className={clss.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
