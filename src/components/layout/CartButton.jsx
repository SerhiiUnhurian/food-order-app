import CartIcon from '../cart/CartIcon';
import clss from './CartButton.module.css';

const CartButton = () => {
  return (
    <button className={clss.button}>
      <span className={clss.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={clss.badge}>3</span>
    </button>
  );
};

export default CartButton;
