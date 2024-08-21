import TextButton from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';
import { changeKroeaPrice } from '@utils/price';
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
      <Img alt={alt} src={imgPath} />
      <CartItemCardInfosWrapper>
        <Name>{children}</Name>
        <Quantity>{`Quantity (${quantity})`}</Quantity>
        {hasTextButton && (
          <Price>
            {`${changeKroeaPrice(price)}`} <Unit>KRW</Unit>
          </Price>
        )}
      </CartItemCardInfosWrapper>
      {hasTextButton ? (
        <TextButton onClick={onClick}>Remove</TextButton>
      ) : (
        <Price>
          {`${changeKroeaPrice(price)}`} <Unit>KRW</Unit>
        </Price>
      )}
    </CartItemCardPropsWrapper>
  );
};

const CartItemCardPropsWrapper = styled.li`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
`;

const Img = styled.img`
  width: 160px;
  height: 160px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  object-fit: cover;
`;

const Name = styled.p``;
const Quantity = styled.p``;
const Price = styled.p``;
const Unit = styled.span`
  ${({ theme }) => theme.typography.Body}
`;

const CartItemCardInfosWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  flex: 1;
  gap: 8px;
  margin-left: 16px;

  & > p:nth-child(2) {
    ${({ theme }) => theme.typography.Body}
  }
`;

export default CartItemCard;
