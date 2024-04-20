import React from 'react';
import styled from 'styled-components';

const StyledNavbarLink = styled.a`
  ${({ theme }) => theme.typography('Links')};
  ${({ theme }) => theme.flexSet()}
  width: 180px;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 36px;
  display: inline-flex;
`;

interface INavbarLink {
  text: string;
}

const NavbarLink = ({ text }: INavbarLink) => {
  return <StyledNavbarLink href="/">{text}</StyledNavbarLink>;
};

export default NavbarLink;
