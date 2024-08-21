import OuterProducts from '@pages/sections/OuterProducts';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '@utils/api';
import { useNavigate, useParams } from 'react-router';
import { ProductType } from 'src/@types/product';
import styled from 'styled-components';
import ProductInfo from '@components/texts/ProductInfo';
import Stepper from '@components/utilities/Stepper';
import { useState } from 'react';
import PrimaryButton from '@components/buttons/PrimaryButton';
import { mixins } from '@styles/Mixin';
import ImgCarousel from '@components/utilities/ImgCarousel';
import { useCartStore } from '@store/cartStore';
import { addToCart } from '@constants/toast';
import { imgOptimization } from '@utils/img';
import ProductsLoading from './sections/ProductsLoading';

interface IProduct {
  product: ProductType;
  selectProducts: ProductType[];
  outerProducts: ProductType[];
}

const ProductsPage = () => {
  const { categoryName, productId } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, error } = useQuery<IProduct>({
    queryKey: [`${categoryName}_${productId}`],
    queryFn: () => fetchProduct(categoryName!, productId!),
  });

  if (isLoading) {
    return <ProductsLoading />;
  }

  if (error || !data) {
    navigate('/error');
    return null;
  }

  const { product, outerProducts, selectProducts } = data;
  const { id, name, price, imgPath, info } = product;

  const handleMinusClick = () => {
    setQuantity(prevValue => Math.max(prevValue - 1, 0));
  };

  const handlePlusClick = () => {
    setQuantity(prevValue => prevValue + 1);
  };

  const handleAddItem = (e: React.MouseEvent) => {
    e.preventDefault();

    const item = {
      id,
      name,
      imgPath,
      price: quantity * price,
      quantity,
    };

    addItem(item);
    addToCart(name);
  };

  return (
    <>
      <ProductsPageWrapper>
        <ProductImgWrapper>
          <ProductImg
            src={imgPath + imgOptimization({ width: 500, height: 500 })}
            alt={name}
          />
        </ProductImgWrapper>

        <ProductInfosWrapper>
          <ProductInfo price={price} name={name}>
            {info}
          </ProductInfo>

          <QuantityWrapper>
            Quantity
            <Stepper
              value={quantity}
              onClickMinus={handleMinusClick}
              onClickPlus={handlePlusClick}
            />
          </QuantityWrapper>

          <CarouselWrapper>
            Other products of category
            <ImgCarousel products={selectProducts} />
          </CarouselWrapper>

          <PrimaryButton onClick={handleAddItem}>Add to basket</PrimaryButton>
        </ProductInfosWrapper>
      </ProductsPageWrapper>
      <OuterProducts outerProducts={outerProducts} />
    </>
  );
};

const ProductsPageWrapper = styled.main``;

const ProductImgWrapper = styled.section`
  text-align: center;
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ProductImg = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const ProductInfosWrapper = styled.section`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  gap: 24px;
`;

const QuantityWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;
`;

const CarouselWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  width: 100%;
  gap: 16px;
`;

export default ProductsPage;
