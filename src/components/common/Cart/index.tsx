import { zIndex } from '@constants/zIndex';
import styled from 'styled-components';
import Buttons from '../Buttons';
import { ReactComponent as WClose } from '@assets/icons/wght400/WClose.svg';
import Text from '../Text';
import { mixins } from '@styles/Mixin';
import { CartItem, useCartStore } from '@store/cartStore';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useUserStore } from '@store/userStore';

type BurgerMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ open, setOpen }: BurgerMenuProps) => {
  const { cart, removeItem } = useCartStore();
  const { isLoggedIn } = useUserStore();

  const Subtotal = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const navigate = useNavigate();

  const goToCheckoutPage = () => {
    if (isLoggedIn) {
      if (cart.length === 0) {
        toast.error(`장바구니가 비어있습니다!`, {
          duration: 3000,
        });
      } else {
        setOpen(!open);

        navigate(`/checkout`);
      }
    } else {
      setOpen(!open);

      navigate(`/login`);

      toast.error(`로그인을 진행해주세요`, {
        icon: '🔐',
        duration: 3000,
      });
    }
  };

  const handleCartMenuClose = () => {
    setOpen(!open);
  };

  return (
    <CartWrapper className="b-1">
      <CpationWrapper className="pl-5 bb-1">
        <Text as="caption" typography="CaptionSmall">
          Shopping Cart
        </Text>
        <CloseButtonWrapper
          className="pr-5 pl-5 pb-2 pt-2"
          onClick={handleCartMenuClose}
        >
          <WClose />
        </CloseButtonWrapper>
      </CpationWrapper>
      {cart.length === 0 ? (
        <NoneItemWrapper className="bb-1">
          <Text as="h5" typography="Heading5">
            장바구니가 비어있습니다
          </Text>
        </NoneItemWrapper>
      ) : (
        cart.map(item => (
          <Item
            id={item.id}
            name={item.name}
            imgPath={item.imgPath}
            price={item.price}
            quantity={item.quantity}
            removeItem={removeItem}
          />
        ))
      )}
      <SubtotalWrapper className="p-5 bb-1">
        <Text as="p" typography="Subtitle">
          Subtotal
        </Text>
        <Text as="p" typography="Subtitle">
          {`$${Subtotal}.00`}
        </Text>
      </SubtotalWrapper>
      <HelfWrapper className="mt-5">
        배송비 및 세금은 결제 시 계산됩니다. 오늘의 꽃 내 무료 표준 배송
      </HelfWrapper>
      <ButtonWrapper>
        <Buttons
          label="check out"
          buttonType="contained"
          handleClick={goToCheckoutPage}
        />
      </ButtonWrapper>
    </CartWrapper>
  );
};

type ItemProps = CartItem & { removeItem: (id: number) => void };

const Item = ({
  id,
  name,
  imgPath,
  price,
  quantity,
  removeItem,
}: ItemProps) => {
  const handleRemoveItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    removeItem(id);
  };

  return (
    <ItemWrapper className="bb-1 p-5">
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
          <Text as="p" typography="Subtitle">
            {`$${price}`}
          </Text>
        </ItemInfoWrapper>
        <Buttons
          label="Remove"
          buttonType="none"
          handleClick={handleRemoveItem}
        />
      </ItemContentWrapper>
    </ItemWrapper>
  );
};

const CartWrapper = styled.div`
  width: 768px;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: ${zIndex.cart};
`;

const CpationWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const CloseButtonWrapper = styled.div`
  cursor: pointer;
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

const NoneItemWrapper = styled.div`
  width: 100%;
  height: 720px;
  ${mixins.flexBox({})}
`;

const HelfWrapper = styled.div`
  ${mixins.flexBox({ align: 'start' })}
  height: 100px;
`;

const SubtotalWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 768px;
`;

export default Cart;
