import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import clss from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const handleAddItemToCart = amount => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price,
    });
  };

  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={clss.meal}>
      <div>
        <h3>{name}</h3>
        <p className={clss.description}>{description}</p>
        <p className={clss.price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm itemId={id} onAddItem={handleAddItemToCart} />
      </div>
    </li>
  );
};

export default MealItem;
