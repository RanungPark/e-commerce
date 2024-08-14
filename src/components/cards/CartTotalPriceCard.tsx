import { mixins } from '@styles/Mixin';
import { changeKroeaPrice, totalPriceCalc } from '@utils/price';
import styled from 'styled-components';

interface CartTotalPriceCardProps {
  children: React.ReactNode;
}

const CartTotalPriceCard = ({ children }: CartTotalPriceCardProps) => {
  return (
    <CartTotalPriceCardWrapper>
      {children}
      <TotalPrice>
        {`${changeKroeaPrice(totalPriceCalc())}`} <span> KRW</span>
      </TotalPrice>
    </CartTotalPriceCardWrapper>
  );
};

const CartTotalPriceCardWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const TotalPrice = styled.span`
  ${({ theme }) => theme.typography.Heading5}

  & span {
    ${({ theme }) => theme.typography.Heading6}
  }
`;
export default CartTotalPriceCard;
