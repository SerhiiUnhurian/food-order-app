import CartIcon from '../cart/CartIcon';
import clss from './CartButton.module.css';

const CartButton = ({ onClick }) => {
  return (
    <button className={clss.button} onClick={onClick}>
      <span className={clss.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={clss.badge}>3</span>
    </button>
  );
};

export default CartButton;
