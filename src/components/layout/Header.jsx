import mealsImg from '../../assets/meals.jpg';
import clss from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={clss.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={clss['mian-image']}>
        <img src={mealsImg} alt="A table full of meals" />
      </div>
    </>
  );
};

export default Header;
