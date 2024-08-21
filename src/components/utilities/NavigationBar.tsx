import NavigationButton from '@components/buttons/NavigationButton';
import { mixins } from '@styles/Mixin';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WMenu } from '@assets/icons/wght400/WMenu.svg';
import { ReactComponent as ShoppingBag } from '@assets/icons/wght300/ShoppingBag.svg';

interface NavigationBarProps {
  onMenuClick: (e: React.MouseEvent) => void;
  onCartClick: (e: React.MouseEvent) => void;
}

const NavigationBar = ({ onMenuClick, onCartClick }: NavigationBarProps) => {
  return (
    <NavigationBarWrapper>
      <NavigationButton
        onClick={onMenuClick}
        hasIcon={true}
        IconComponent={WMenu}
        ariaLabel="menu"
      />
      <NavigationButton
        onClick={onCartClick}
        hasIcon={true}
        IconComponent={ShoppingBag}
        ariaLabel="shopping bag"
      />
    </NavigationBarWrapper>
  );
};

const NavigationBarWrapper = styled.header`
  ${mixins.flexBox({ justify: 'space-between' })};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  & > button:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  & > button:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default NavigationBar;
