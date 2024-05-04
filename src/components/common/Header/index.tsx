import styled from 'styled-components';
import NavbarLink from './Menu';
import { mixins } from 'src/styles/Mixin';

const StyledHeader = styled.nav`
  ${mixins.flexBox(undefined, undefined, 'space-between')};
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-right: none;

  & .right-nav {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <NavbarLink label="Shop"></NavbarLink>
        <NavbarLink label="Contact"></NavbarLink>
      </div>
      <div className="right-nav">
        <NavbarLink label="Sign in"></NavbarLink>
        <NavbarLink label="Cart"></NavbarLink>
      </div>
    </StyledHeader>
  );
};

export default Header;
