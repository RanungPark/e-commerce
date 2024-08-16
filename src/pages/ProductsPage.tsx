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
import Loading from '@components/publics/Loading';

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
    return <Loading />;
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
        <ProductsImgWrapper className="pb-3 pt-3 bb-1">
          <img src={imgPath} alt={name} className="b-1" />
        </ProductsImgWrapper>

        <ProductsInfosWrapper className="p-5 bb-1">
          <ProductInfo price={price} name={name}>
            {info}
          </ProductInfo>

          <ProductsQuantityWrapper>
            Quantity
            <Stepper
              value={quantity}
              onClickMinus={handleMinusClick}
              onClickPlus={handlePlusClick}
            />
          </ProductsQuantityWrapper>

          <ProductsCarouselWrapper>
            Other products of category
            <ImgCarousel products={selectProducts} />
          </ProductsCarouselWrapper>

          <PrimaryButton onClick={handleAddItem}>Add to basket</PrimaryButton>
        </ProductsInfosWrapper>
      </ProductsPageWrapper>
      <OuterProducts outerProducts={outerProducts} />
    </>
  );
};

const ProductsPageWrapper = styled.main``;

const ProductsImgWrapper = styled.section`
  text-align: center;

  & img {
    width: 500px;
    height: 500px;
  }
`;

const ProductsInfosWrapper = styled.section`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}

  gap:24px;
`;

const ProductsQuantityWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;
`;

const ProductsCarouselWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  width: 100%;
  gap: 16px;
`;

export default ProductsPage;
