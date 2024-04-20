import React from 'react';
import styled from 'styled-components';
import NavbarLink from './NavbarLink';

const StyledNavbar = styled.nav`
  ${({ theme }) => theme.flexSet(undefined, 'space-between', undefined)}
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-right: none;

  & .right-nav {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

interface Navbar {
  text1st: string;
  text2ed: string;
  text3rd: string;
  text4th: string;
}

const Navbar = ({ text1st, text2ed, text3rd, text4th }: Navbar) => {
  return (
    <StyledNavbar>
      <div>
        <NavbarLink text={text1st}></NavbarLink>
        <NavbarLink text={text2ed}></NavbarLink>
      </div>
      <div className="right-nav">
        <NavbarLink text={text3rd}></NavbarLink>
        <NavbarLink text={text4th}></NavbarLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
