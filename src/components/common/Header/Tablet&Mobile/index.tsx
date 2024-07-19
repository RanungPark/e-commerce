import styled from 'styled-components';
import NavbarLink from './Menu';
import { mixins } from '@styles/Mixin';
import { ReactComponent as WMenu } from '@assets/icons/wght400/WMenu.svg';
import { ReactComponent as ShoppingBag } from '@assets/icons/wght300/ShoppingBag.svg';
import BurgerMenu from '@components/common/BurgerMenu';
import { useState } from 'react';
import Cart from '@components/common/Cart';

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handleBurgerMenuOpen = () => {
    setBurgerOpen(!burgerOpen);
  };

  const handleCartMenuOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      {burgerOpen ? (
        <BurgerMenu setOpen={setBurgerOpen} open={burgerOpen} />
      ) : (
        <></>
      )}
      {cartOpen ? <Cart setOpen={setCartOpen} open={cartOpen} /> : <></>}
      <StyledHeader>
        <LeftNav onClick={handleBurgerMenuOpen}>
          <NavbarLink icon={WMenu}></NavbarLink>
        </LeftNav>
        <RightNav className="right-nav" onClick={handleCartMenuOpen}>
          <NavbarLink icon={ShoppingBag}></NavbarLink>
        </RightNav>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  ${mixins.flexBox({ justify: 'space-between' })};
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-right: none;
`;

const LeftNav = styled.nav``;
const RightNav = styled.nav`
  border-left: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Header;
