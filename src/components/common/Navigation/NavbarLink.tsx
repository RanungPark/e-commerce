import React from 'react';
import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import { PickLabel } from 'src/@types/common';

const StyledNavbarLink = styled.a`
  ${({ theme }) => theme.typography.Links};
  ${mixins.flexBox()};
  width: 180px;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 36px;
  display: inline-flex;
`;

type NavbarLinkProps = PickLabel;

const NavbarLink = ({ label }: NavbarLinkProps) => {
  return <StyledNavbarLink href="/">{label}</StyledNavbarLink>;
};

export default NavbarLink;
