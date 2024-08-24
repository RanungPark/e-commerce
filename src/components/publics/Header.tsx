import { useState } from 'react';
import styled from 'styled-components';

import BurgerMenu from '@components/publics/BurgerMenu';
import NavigationBar from '@components/utilities/NavigationBar';

import Cart from './Cart';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleBurgerMenuOpen = () => setBurgerOpen((prev) => !prev);
  const handleCartOpen = () => setCartOpen((prev) => !prev);

  return (
    <HeaderWrapper>
      {burgerOpen && <BurgerMenu setOpen={setBurgerOpen} open={burgerOpen} />}
      {cartOpen && <Cart setOpen={setCartOpen} open={cartOpen} />}
      <NavigationBar
        onMenuClick={handleBurgerMenuOpen}
        onCartClick={handleCartOpen}
      />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header``;
export default Header;
