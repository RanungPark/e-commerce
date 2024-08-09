import IconButton from '@components/buttons/IconButton';
import { zIndex } from '@constants/zIndex';
import { useCartStore } from '@store/cartStore';
import { useUserStore } from '@store/userStore';
import styled from 'styled-components';
import { ReactComponent as WClose } from '@assets/icons/wght400/WClose.svg';
import { mixins } from '@styles/Mixin';
import PrimaryButton from '@components/buttons/PrimaryButton';
import { clearCart, loginFail } from '@constants/toast';
import { useNavigate } from 'react-router';
import CartItemCardList from '@components/lists/CartItemCardList';
import CartTotalPriceCard from '@components/cards/CartTotalPriceCard';

type CartProps = {
  open: boolean;
  setOpen: (date: boolean) => void;
};

const Cart = ({ open, setOpen }: CartProps) => {
  const { carts } = useCartStore();
  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(!open);
  };

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
    <CartWrapper className="b-1">
      <CartHeaderWrapper className="pt-2 pb-2 pl-5 pr-5 bb-1">
        Shopping Cart
        <IconButton
          IconComponent={WClose}
          size="medium"
          onClick={handleClose}
        />
      </CartHeaderWrapper>
      <CartMainWrapper>
        {carts.length === 0 ? (
          <p>장바구니가 비어있습니다</p>
        ) : (
          <CartItemCardList />
        )}
      </CartMainWrapper>
      <CartfooterWrapper>
        <CartTotalPriceCard>Subtotal</CartTotalPriceCard>
        <p>배송비 및 세금은 결제 시 계산됩니다. 오늘의 꽃 내 무료 표준 배송</p>
        <PrimaryButton onClick={goToCheckoutPage}>check out</PrimaryButton>
      </CartfooterWrapper>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  width: 768px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: ${zIndex.cart};
  display: flex;
  flex-direction: column;
`;

const CartHeaderWrapper = styled.div`
  ${({ theme }) => theme.typography.Heading6}
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const CartMainWrapper = styled.ul`
  flex: 1;
  overflow-y: auto;

  & > p {
    ${({ theme }) => theme.typography.Heading5};
    ${mixins.flexBox({})}

    height: 100%;
  }

  & li {
    padding: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }

  & li:last-child {
    border-bottom: none;
  }
`;

const CartfooterWrapper = styled.div`
  & > div {
    border-top: 1px solid ${({ theme }) => theme.colors.black};
    padding: 40px;
  }
  & > p {
    ${({ theme }) => theme.typography.Caption}
    border-top: 1px solid ${({ theme }) => theme.colors.black};
    padding: 20px;
    text-align: center;
  }
`;

export default Cart;