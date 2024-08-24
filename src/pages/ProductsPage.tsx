import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import ProductInfo from '@components/texts/ProductInfo';
import ImgCarousel from '@components/utilities/ImgCarousel';
import Stepper from '@components/utilities/Stepper';
import { addToCart } from '@constants/toast';
import OuterProducts from '@pages/sections/OuterProducts';
import { useCartStore } from '@store/cartStore';
import { mixins } from '@styles/Mixin';
import { fetchProduct } from '@utils/api';
import { imgOptimization } from '@utils/img';
import { ProductType } from 'src/@types/product';

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

  useEffect(() => {
    setQuantity(1);
  }, [categoryName, productId]);

  if (isLoading) {
    return <ProductsLoading />;
  }

  if (error || !data) {
    navigate('/error');
    return null;
  }

  const { product, outerProducts, selectProducts } = data;
  const { id, name, price, imgPath, info, category } = product;

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
      category,
      quantity,
      key: `${category}_${id}`,
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
              testId="quantityInput"
            />
          </QuantityWrapper>

          <CarouselWrapper>
            Other products of category
            <ImgCarousel products={selectProducts} />
          </CarouselWrapper>

          <PrimaryButton onClick={handleAddItem} testId="addBtn">
            Add to basket
          </PrimaryButton>
        </ProductInfosWrapper>
      </ProductsPageWrapper>
      <OuterProducts outerProducts={outerProducts} />
    </>
  );
};

const ProductsPageWrapper = styled.main``;

const ProductImgWrapper = styled.section`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  text-align: center;
`;

const ProductImg = styled.img`
  width: 500px;
  height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const ProductInfosWrapper = styled.section`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
  gap: 24px;

  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const QuantityWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;
`;

const CarouselWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;

  width: 100%;
`;

export default ProductsPage;
