import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../Text';

const BurgerMenu = () => {
  return (
    <StyledBugerMenu>
      <Menu to={'/'}>
        <Text as="h5" typography="Heading5">
          {'Sign in'}
        </Text>
      </Menu>
    </StyledBugerMenu>
  );
};

const StyledBugerMenu = styled.div`
  width: 100%;
  position: absolute;
  background-color: #000000;
`;

const Menu = styled(Link)`
  margin: 24px;
`;

export default BurgerMenu;
