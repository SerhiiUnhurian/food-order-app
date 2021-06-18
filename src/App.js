import { useState } from 'react';
import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <>
      {isCartOpen && <Cart onClose={handleCartClose} />}
      <Header onCartOpen={handleCartOpen} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
