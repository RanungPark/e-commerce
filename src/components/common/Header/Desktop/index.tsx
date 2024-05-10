import styled from 'styled-components';
import NavbarLink from './Menu';
import { mixins } from 'src/styles/Mixin';

const Header = () => {
  return (
    <StyledHeader>
      <LeftNav>
        <NavbarLink label="Shop"></NavbarLink>
        <NavbarLink label="Contact"></NavbarLink>
      </LeftNav>
      <RightNav className="right-nav">
        <NavbarLink label="Sign in"></NavbarLink>
        <NavbarLink label="Cart"></NavbarLink>
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
