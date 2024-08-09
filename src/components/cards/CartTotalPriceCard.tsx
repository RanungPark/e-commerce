import { mixins } from '@styles/Mixin';
import { totalPriceCalc } from '@utils/calc';
import styled from 'styled-components';

interface CartTotalPriceCardProps {
  children: string | React.ReactNode;
}

const CartTotalPriceCard = ({ children }: CartTotalPriceCardProps) => {
  return (
    <CartTotalPriceCardWrapper>
      {children} <span>{`$${totalPriceCalc()}.00`}</span>
    </CartTotalPriceCardWrapper>
  );
};

const CartTotalPriceCardWrapper = styled.div`
  ${({ theme }) => theme.typography.Subtitle}
  ${mixins.flexBox({ justify: 'space-between' })}

  & span {
    ${({ theme }) => theme.typography.Heading5}
  }
`;
export default CartTotalPriceCard;
