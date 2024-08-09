import CartItemCard from '@components/cards/CartItemCard';
import { useCartStore } from '@store/cartStore';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface CartItemCardListProps {
  hasTextButton?: boolean;
}

const CartItemCardList = ({ hasTextButton = true }: CartItemCardListProps) => {
  const { carts, removeItem } = useCartStore();

  return (
    <CartItemCardListWrapper>
      {carts.map(({ name, imgPath, price, quantity }) => (
        <CartItemCard
          key={uuidv4()}
          imgPath={imgPath}
          alt={name}
          price={price}
          quantity={quantity}
          onClick={() => removeItem(name)}
          hasTextButton={hasTextButton}
        >
          {name}
        </CartItemCard>
      ))}
    </CartItemCardListWrapper>
  );
};

const CartItemCardListWrapper = styled.ul``;

export default CartItemCardList;
