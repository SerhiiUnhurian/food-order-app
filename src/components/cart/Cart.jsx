import Modal from '../ui/Modal';
import clss from './Cart.module.css';

const Cart = ({ onClose }) => {
  const cartItems = (
    <ul className={clss['cart-items']}>
      {[{ id: 1, name: 'sushi', price: 12.99, amount: 1 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={clss.total}>
        <span>Total amount</span>
        <span>32.62</span>
      </div>
      <div className={clss.actions}>
        <button onClick={onClose} className={clss['button--alt']}>
          Close
        </button>
        <button className={clss.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
