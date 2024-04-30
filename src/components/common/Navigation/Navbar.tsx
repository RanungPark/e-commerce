import React from 'react';
import styled from 'styled-components';
import NavbarLink from './NavbarLink';
import { mixins } from 'src/styles/Mixin';

const StyledNavbar = styled.nav`
  ${mixins.flexBox(undefined, 'space-between')};
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-right: none;

  & .right-nav {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

type NavbarLabels = 'label1st' | 'label2ed' | 'label3rd' | 'label4th';

type NavbarProps = {
  [key in NavbarLabels]: string;
};

const Navbar = ({ label1st, label2ed, label3rd, label4th }: NavbarProps) => {
  return (
    <StyledNavbar>
      <div>
        <NavbarLink label={label1st}></NavbarLink>
        <NavbarLink label={label2ed}></NavbarLink>
      </div>
      <div className="right-nav">
        <NavbarLink label={label3rd}></NavbarLink>
        <NavbarLink label={label4th}></NavbarLink>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
