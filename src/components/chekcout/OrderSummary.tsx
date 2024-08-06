import styled from 'styled-components';
import { ReactComponent as WShoppingCart } from '@assets/icons/wght400/WShoppingCart.svg';
import { ReactComponent as ChevronDown } from '@assets/icons/wght300/ChevronDown.svg';
import { ReactComponent as ChevronUp } from '@assets/icons/wght300/ChevronUp.svg';
import Text from '@components/common/Text';
import { mixins } from '@styles/Mixin';
import { CartItem, useCartStore } from '@store/cartStore';
import { useState } from 'react';
import { PartialOptional } from 'src/@types/utils';

const OrderSummary = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  const handleClick = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const { cart } = useCartStore();

  const Subtotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <OrderSummaryWrapper className="bb-1 br-1 bl-1">
      {isOrderOpen ? (
        <OpenOrder className="pt-5 pb-5 pr-10 pl-10">
          <OrderSummaryContent onClick={handleClick}>
            <WShoppingCart />
            <Text as="h6" typography="Heading6">
              Show order summary
            </Text>
            <ChevronUp />
          </OrderSummaryContent>
          {cart.map(item => (
            <Item
              name={item.name}
              imgPath={item.imgPath}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <TotalWrapper className="mt-3">
            <Text as="p" typography="Subtitle">
              Total
            </Text>
            <Text as="h5" typography="Heading5">
              $ {Subtotal}
            </Text>
          </TotalWrapper>
        </OpenOrder>
      ) : (
        <CloseOrder className="pt-5 pb-5 pr-10 pl-10">
          <OrderSummaryContent onClick={handleClick}>
            <WShoppingCart />
            <Text as="h6" typography="Heading6">
              Show order summary
            </Text>
            <ChevronDown />
          </OrderSummaryContent>
          <Text as="h5" typography="Heading5">
            $ {Subtotal}
          </Text>
        </CloseOrder>
      )}
    </OrderSummaryWrapper>
  );
};

type ItemProps = PartialOptional<CartItem, 'id'>;

const Item = ({ name, imgPath, price, quantity }: ItemProps) => {
  return (
    <ItemWrapper className="bb-1">
      <ItemImgWrapper className="b-1">
        <img src={imgPath} alt={name}></img>
      </ItemImgWrapper>
      <ItemContentWrapper>
        <ItemInfoWrapper>
          <Text as="p" typography="Subtitle">
            {name}
          </Text>
          <Text as="p" typography="Body">
            {`Qauantity (${quantity})`}
          </Text>
        </ItemInfoWrapper>
        <Text as="p" typography="Subtitle">
          {`$${price}`}
        </Text>
      </ItemContentWrapper>
    </ItemWrapper>
  );
};

export default OrderSummary;

const OrderSummaryWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.extralight};
`;

const CloseOrder = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  height: 72px;
`;

const OpenOrder = styled.div``;

const OrderSummaryContent = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 8px;
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 240px;
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px
`;

const ItemImgWrapper = styled.div`
  width: 160px;
  height: 160px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ItemContentWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  flex: 1;
`;
const ItemInfoWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

const TotalWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;
