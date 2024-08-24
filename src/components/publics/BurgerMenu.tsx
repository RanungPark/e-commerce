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
  position: fixed;
  z-index: ${zIndex.bugerMenuBackGround};

  width: 768px;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.colors.black};

  background-color: rgb(0 0 0 / 20%);
`;

const BurgerMenuWrapper = styled.div`
  position: fixed;
  z-index: ${zIndex.bugerMenu};

  width: 385px;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
`;

const TextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;

  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const BurgerMenuCloseButtonWrapper = styled.button`
  ${mixins.flexBox({ justify: 'start' })}
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  cursor: pointer;
`;

const SMSIconButtonWrapper = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default BurgerMenu;
