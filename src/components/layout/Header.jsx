import mealsImg from '../../assets/meals.jpg';
import CartButton from './CartButton';
import clss from './Header.module.css';

const Header = ({ onCartOpen }) => {
  return (
    <>
      <header className={clss.header}>
        <h1>Meals</h1>
        <CartButton onClick={onCartOpen} />
      </header>
      <div className={clss['main-image']}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </>
  );
};

export default Header;
