import styled from 'styled-components';
import Stepper from '../common/Stepper';
import Text from '../common/Text';
import { mixins } from '@styles/Mixin';
import { useState } from 'react';
import Buttons from '../common/Buttons';
import { PickFromProducts, ProductType } from 'src/@types/product';
import { useCartStore } from '@store/cartStore';
import toast from 'react-hot-toast';

type ProductProps = {
  product: ProductType;
  combinationProducts: PickFromProducts[];
};

const Product = ({ product, combinationProducts }: ProductProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const handleMinus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };
  const handlePlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleAddItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const item = {
      id: product.id,
      name: product.name,
      imgPath: product.imgPath,
      price: quantity * product.price,
      quantity,
    };

    addItem(item);

    toast.success(`${product.name}이(가) 장바구니에 담겼어요!`, {
      icon: '🛒',
      duration: 3000,
    });
  };

  return (
    <StyledPorduct className="br-1">
      <ImgWrapper className="bl-1 bb-1 ">
        <img src={product.imgPath} alt={product.name} />
      </ImgWrapper>
      <ContentWrapper className="bl-1 bb-1">
        <ProdcutWrapper>
          <Text as="p" typography="CaptionBold"></Text>
          <Text as="p" typography="Heading3">
            {product.name} - $ {product.price}
          </Text>
          <Text as="p" typography="Body">
            {product.info}
          </Text>
        </ProdcutWrapper>
        <StepperWrapper className="mt-3">
          <Text as="p" typography="Subtitle">
            {'Quantity'}
          </Text>
          <Stepper
            value={quantity}
            handleMinus={handleMinus}
            handlePlus={handlePlus}
          />
        </StepperWrapper>
        <CombinationProduct></CombinationProduct>
        <OptionsWrapper className="mt-3 mb-3">
          {/* <Text as="p" typography="Subtitle">
            Price options
          </Text> */}
        </OptionsWrapper>
        <Buttons
          buttonType="contained"
          label="add to basket"
          handleClick={handleAddItem}
        />
      </ContentWrapper>
    </StyledPorduct>
  );
};

const CombinationProduct = () => {
  return <></>;
};

const StyledPorduct = styled.section``;

const ImgWrapper = styled.section`
  height: 670px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const ProdcutWrapper = styled.section`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;
`;

const ContentWrapper = styled.section`
  padding: 40px;
`;

const StepperWrapper = styled.section`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;
`;

const OptionsWrapper = styled.section``;

export default Product;
