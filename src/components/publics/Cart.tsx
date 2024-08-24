import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { ReactComponent as WClose } from '@assets/icons/wght400/WClose.svg';
import IconButton from '@components/buttons/IconButton';
import PrimaryButton from '@components/buttons/PrimaryButton';
import CartTotalPriceCard from '@components/cards/CartTotalPriceCard';
import CartItemCardList from '@components/lists/CartItemCardList';
import { clearCart, loginFail } from '@constants/toast';
import { zIndex } from '@constants/zIndex';
import { useCartStore } from '@store/cartStore';
import { useUserStore } from '@store/userStore';
import { mixins } from '@styles/Mixin';

type CartProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Cart = ({ open, setOpen }: CartProps) => {
  const { carts } = useCartStore();
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();

  const handleClose = () => setOpen(!open);

  const goToCheckoutPage = () => {
    if (isLoggedIn) {
      if (carts.length === 0) {
        clearCart();
      } else {
        setOpen(!open);
        navigate(`/checkout`);
      }
    } else {
      setOpen(!open);
      navigate(`/login`);
      loginFail();
    }
  };

  return (
    <CartWrapper>
      <CartHeaderWrapper>
        Shopping Cart
        <IconButton
          IconComponent={WClose}
          size="medium"
          onClick={handleClose}
          ariaLabel="close"
        />
      </CartHeaderWrapper>
      <CartMainWrapper>
        {carts.length === 0 ? (
          <EmptyCartMessage>장바구니가 비어있습니다</EmptyCartMessage>
        ) : (
          <CartItemCardList />
        )}
      </CartMainWrapper>
      <CartfooterWrapper>
        <CartTotalPriceCard>Subtotal</CartTotalPriceCard>
        <ShippingNote>
          배송비 및 세금은 결제 시 계산됩니다. 오늘의 꽃 내 무료 표준 배송
        </ShippingNote>
        <PrimaryButton onClick={goToCheckoutPage} testId="checkOutBtn">
          check out
        </PrimaryButton>
      </CartfooterWrapper>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  position: fixed;
  z-index: ${zIndex.cart};
  flex-direction: column;

  width: 768px;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.white};
`;

const CartHeaderWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Heading6}
  padding: 16px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const CartMainWrapper = styled.ul`
  overflow-y: auto;
  flex: 1;

  & li {
    padding: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const EmptyCartMessage = styled.p`
  ${({ theme }) => theme.typography.Heading5}
  ${mixins.flexBox({})}
  height: 100%;
`;

const CartfooterWrapper = styled.div`
  & > div {
    padding: 40px;
    border-top: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const ShippingNote = styled.p`
  ${({ theme }) => theme.typography.Caption}
  padding: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.black};

  text-align: center;
`;

export default Cart;
