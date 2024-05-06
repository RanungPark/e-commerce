import styled from 'styled-components';
import NavbarLink from './Menu';
import { mixins } from 'src/styles/Mixin';

const StyledHeader = styled.nav`
  ${mixins.flexBox({ justify: 'space-between' })};
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-right: none;
`;

const LeftBox = styled.div``;
const RightBox = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.black};
`;

const Header = () => {
  return (
    <StyledHeader>
      <LeftBox>
        <NavbarLink label="Shop"></NavbarLink>
        <NavbarLink label="Contact"></NavbarLink>
      </LeftBox>
      <RightBox className="right-nav">
        <NavbarLink label="Sign in"></NavbarLink>
        <NavbarLink label="Cart"></NavbarLink>
      </RightBox>
    </StyledHeader>
  );
};

export default Header;
