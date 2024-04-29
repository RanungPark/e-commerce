import React from 'react';
import styled from 'styled-components';
import { mixins } from '../../../styles/Mixin';

const StyledNavbarLink = styled.a`
  ${({ theme }) => theme.typography.Links};
  ${mixins.flexBox()};
  width: 180px;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 36px;
  display: inline-flex;
`;

interface NavbarLinkProps {
  label: string;
}

const NavbarLink = ({ label }: NavbarLinkProps) => {
  return <StyledNavbarLink href="/">{label}</StyledNavbarLink>;
};

export default NavbarLink;
