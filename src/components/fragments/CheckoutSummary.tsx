import { mixins } from '@styles/Mixin';
import { ReactComponent as WShoppingCart } from '@assets/icons/wght400/WShoppingCart.svg';
import { ReactComponent as ChevronDown } from '@assets/icons/wght300/ChevronDown.svg';
import { ReactComponent as ChevronUp } from '@assets/icons/wght300/ChevronUp.svg';
import styled from 'styled-components';
import IconButton from '@components/buttons/IconButton';
import { useState } from 'react';
import CartTotalPriceCard from '@components/cards/CartTotalPriceCard';
import CartItemCardList from '@components/lists/CartItemCardList';

const CheckoutSummary = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleClick = () => setIsOrderOpen(prev => !prev);

  return (
    <CheckoutSummaryWrapper>
      {isOrderOpen ? (
        <CheckoutSummaryContent>
          <ButtonWrapper onClick={handleClick}>
            <IconButton IconComponent={WShoppingCart} />
            Show order summary
            <IconButton IconComponent={ChevronUp} />
          </ButtonWrapper>
          <CartItemCardList hasTextButton={false} />
          <CartTotalPriceCard>Total</CartTotalPriceCard>
        </CheckoutSummaryContent>
      ) : (
        <CheckoutSummaryContent>
          <CartTotalPriceCard>
            <ButtonWrapper onClick={handleClick}>
              <IconButton IconComponent={WShoppingCart} />
              Show order summary
              <IconButton IconComponent={ChevronDown} />
            </ButtonWrapper>
          </CartTotalPriceCard>
        </CheckoutSummaryContent>
      )}
    </CheckoutSummaryWrapper>
  );
};

const CheckoutSummaryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.extralight};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const CheckoutSummaryContent = styled.div`
  padding: 40px 80px;

  & li {
    padding: 24px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  }

  & > div:last-child {
    padding-top: 24px;
  }
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.typography.Heading6}
  ${mixins.flexBox({ justify: 'start' })}
  gap: 8px;
  cursor: pointer;
`;

export default CheckoutSummary;
