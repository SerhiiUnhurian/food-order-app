import Card from '../ui/Card';
import clss from './AvailableMeals.module.css';
import MealItem from './meal-item/MealItem';

const MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = (
    <ul>
      {MEALS.map(meal => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </ul>
  );

  return (
    <section className={clss.meals}>
      <Card>{meals}</Card>
    </section>
  );
};

export default AvailableMeals;
