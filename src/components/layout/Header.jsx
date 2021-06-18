import mealsImg from '../../assets/meals.jpg';
import CartButton from './CartButton';
import clss from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={clss.header}>
        <h1>Meals</h1>
        <CartButton />
      </header>
      <div className={clss['main-image']}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </>
  );
};

export default Header;
