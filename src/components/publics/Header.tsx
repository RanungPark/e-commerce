import Cart from '@components/common/Cart';
import BurgerMenu from '@components/publics/BurgerMenu';
import NavigationBar from '@components/utilities/NavigationBar';
import { useState } from 'react';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleBurgerMenuOpen = () => {
    setBurgerOpen(prev => !prev);
  };

  const handleCartOpen = () => {
    setCartOpen(prev => !prev);
  };

  return (
    <>
      {burgerOpen ? (
        <BurgerMenu setOpen={setBurgerOpen} open={burgerOpen} />
      ) : (
        <></>
      )}
      {cartOpen ? <Cart setOpen={setCartOpen} open={cartOpen} /> : <></>}
      <NavigationBar
        onMenuClick={handleBurgerMenuOpen}
        onCartClick={handleCartOpen}
      />
    </>
  );
};

export default Header;
