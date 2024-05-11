import styled from 'styled-components';
import NavbarLink from './Menu';
import { mixins } from 'src/styles/Mixin';
import { ReactComponent as Burger } from 'src/assets/icons/wght400/Menu.svg';
import { ReactComponent as ShoppingBag } from 'src/assets/icons/wght300/shopping_bag_FILL0_wght300_GRAD0_opsz24.svg';

const Header = () => {
  return (
    <StyledHeader>
      <LeftNav>
        <NavbarLink as="button" icon={Burger}></NavbarLink>
      </LeftNav>
      <RightNav className="right-nav">
        <NavbarLink as="a" icon={ShoppingBag}></NavbarLink>
      </RightNav>
    </StyledHeader>
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