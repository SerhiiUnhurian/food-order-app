import clss from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={clss.meal}>
      <div>
        <h3>{name}</h3>
        <p className={clss.description}>{description}</p>
        <p className={clss.price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
