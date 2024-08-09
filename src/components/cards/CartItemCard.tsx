import TextButton from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface CartItemCardProps {
  children: string;
  price: number;
  quantity: number;
  alt: string;
  imgPath: string;
  hasTextButton?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const CartItemCard = ({
  children,
  price,
  quantity,
  alt,
  imgPath,
  hasTextButton = true,
  onClick,
}: CartItemCardProps) => {
  return (
    <CartItemCardPropsWrapper>
      <img alt={alt} src={imgPath} className="b-1" />
      <CartItemCardInfosWrapper className="ml-2">
        <span>{children}</span>
        <span>{`Quantity (${quantity})`}</span>
        {hasTextButton ? <span>{`$${price}`}</span> : <></>}
      </CartItemCardInfosWrapper>
      {hasTextButton ? (
        <TextButton onClick={onClick}>Remove</TextButton>
      ) : (
        <span>{`$${price}`}</span>
      )}
    </CartItemCardPropsWrapper>
  );
};

const CartItemCardPropsWrapper = styled.li`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}

  & img {
    width: 160px;
    height: 160px;
  }
`;

const CartItemCardInfosWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  flex: 1;
  gap: 8px;

  & span:nth-child(2) {
    ${({ theme }) => theme.typography.Body}
  }
`;

export default CartItemCard;
