import { useContext, useEffect, useState } from 'react';
import CartIcon from '../cart/CartIcon';
import CartContext from '../store/cart-context';
import clss from './CartButton.module.css';

const CartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [isBtnAnimated, setIsBtnAnimated] = useState(false);

  const totalItemsAmount = cartCtx.items.reduce(
    (total, item) => (total += item.amount),
    0
  );

  const btnClasses = `${clss.button} ${isBtnAnimated && clss.bump}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setIsBtnAnimated(true);
    const timer = setTimeout(() => {
      setIsBtnAnimated(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={clss.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={clss.badge}>{totalItemsAmount}</span>
    </button>
  );
};

export default CartButton;
