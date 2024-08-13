import { mixins } from '@styles/Mixin';
import { totalPriceCalc } from '@utils/calc';
import styled from 'styled-components';

interface CartTotalPriceCardProps {
  children: React.ReactNode;
}

const CartTotalPriceCard = ({ children }: CartTotalPriceCardProps) => {
  return (
    <CartTotalPriceCardWrapper>
      {children}
      <TotalPrice>{`$${totalPriceCalc()}.00`}</TotalPrice>
    </CartTotalPriceCardWrapper>
  );
};

const CartTotalPriceCardWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const TotalPrice = styled.span`
  ${({ theme }) => theme.typography.Heading5}
`;
export default CartTotalPriceCard;
