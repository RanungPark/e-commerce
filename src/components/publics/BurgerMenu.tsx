import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as WClose } from '@assets/icons/wght400/WClose.svg';
import IconButton from '@components/buttons/IconButton';
import MenuButton from '@components/buttons/MenuButton';
import TextButton from '@components/buttons/TextButton';
import SNSIconButtonList from '@components/lists/SNSIconButtonList';
import { pageWait } from '@constants/toast';
import { zIndex } from '@constants/zIndex';
import { aboutDatas, menuDatas } from '@data/buttonDatas';
import { mixins } from '@styles/Mixin';

type BurgerMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BurgerMenu = ({ open, setOpen }: BurgerMenuProps) => {
  const handleClose = () => setOpen(!open);

  return (
    <>
      <BurgerMenuBackGround onClick={handleClose} />
      <BurgerMenuWrapper>
        <BurgerMenuCloseButtonWrapper onClick={handleClose}>
          <IconButton IconComponent={WClose} size="medium" ariaLabel="close" />
        </BurgerMenuCloseButtonWrapper>
        {menuDatas.map(({ to, children }) => (
          <MenuButton to={to} onClick={handleClose} key={uuidv4()}>
            {children}
          </MenuButton>
        ))}
        <TextButtonList>
          {aboutDatas.map(children => (
            <TextButton key={uuidv4()} onClick={pageWait}>
              {children}
            </TextButton>
          ))}
        </TextButtonList>
        <SMSIconButtonWrapper>
          <SNSIconButtonList />
        </SMSIconButtonWrapper>
      </BurgerMenuWrapper>
    </>
  );
};

const BurgerMenuBackGround = styled.div`
  width: 768px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: ${zIndex.bugerMenuBackGround};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const BurgerMenuWrapper = styled.div`
  width: 385px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  position: fixed;
  z-index: ${zIndex.bugerMenu};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const TextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px;
  gap: 16px;
`;

const BurgerMenuCloseButtonWrapper = styled.button`
  ${mixins.flexBox({ justify: 'start' })}
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  padding: 16px;
`;

const SMSIconButtonWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px;
`;

export default BurgerMenu;
