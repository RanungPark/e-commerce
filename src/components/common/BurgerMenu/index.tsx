import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../Text';
import { zIndex } from '@constants/zIndex';
import { burgerMenus } from '@data/bugerMenu';
import { ReactComponent as WClose } from '@assets/icons/wght400/WClose.svg';
import { mixins } from '@styles/Mixin';
import { IconInfos } from '../ContactIcons';

type BurgerMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu = ({ open, setOpen }: BurgerMenuProps) => {
  const handleBurgerMenuClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <BugerMenuBackGround onClick={handleBurgerMenuClose} />
      <BugerMenuWrapper className="bb-1 br-1 bl-1">
        <CloseButtonWrapper className="p-2" onClick={handleBurgerMenuClose}>
          <WClose />
        </CloseButtonWrapper>
        {burgerMenus.map(menu => (
          <Menu
            key={menu.content}
            to={menu.link}
            className="bt-1 p-3"
            onClick={handleBurgerMenuClose}
          >
            <Text as="h5" typography="Heading5">
              {menu.content}
            </Text>
          </Menu>
        ))}
        <InfoWrapper className="bt-1 p-3">
          {['Shipping & returns', 'Terms & conditions', 'Privacy policy'].map(
            info => (
              <Text key={info} as="p" typography="Links">
                {info}
              </Text>
            )
          )}
        </InfoWrapper>
        <IconsWrapper className="bt-1 p-3">
          <IconInfos />
        </IconsWrapper>
      </BugerMenuWrapper>
    </>
  );
};

const BugerMenuBackGround = styled.div`
  width: 768px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: ${zIndex.bugerMenuBackGround};
`;

const BugerMenuWrapper = styled.div`
  width: 385px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  position: fixed;
  z-index: ${zIndex.bugerMenu};
`;

const Menu = styled(Link)`
  display: block;
`;

const CloseButtonWrapper = styled.button`
  ${mixins.flexBox({ justify: 'start' })}
  width: 100%;
  cursor: pointer;
`;

const IconsWrapper = styled.div``;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default BurgerMenu;
