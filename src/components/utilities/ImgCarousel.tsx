import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import IconButton from '@components/buttons/IconButton';
import SecondaryImageCard from '@components/cards/SecondaryImageCard';
import { mixins } from '@styles/Mixin';
import { imgOptimization } from '@utils/img';
import { ProductType } from 'src/@types/product';
interface ImgCarouselProps {
  products: ProductType[];
}

interface GoToProductProps {
  productCategory: string;
  productId: number;
}

const ImgCarousel = ({ products }: ImgCarouselProps) => {
  const [viewProducts, setViewProducts] = useState(
    products.filter(({ id }) => id <= 5),
  );

  const handleLeftButton = () => {
    if (viewProducts[0].id === 1) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) =>
          viewProducts[0].id - 1 <= id && id <= viewProducts[4].id - 1,
      );
      setViewProducts(newViewProducts);
    }
  };

  const handleRightButton = () => {
    if (viewProducts[4].id === products.length) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) =>
          viewProducts[0].id + 1 <= id && id <= viewProducts[4].id + 1,
      );
      setViewProducts(newViewProducts);
    }
  };

  const navigate = useNavigate();

  const goToProduct =
    ({ productCategory, productId }: GoToProductProps) =>
    () => {
      navigate(`/categories/${productCategory}/products/${productId}`);
    };

  return (
    <ImgCarouselWrapper>
      <IconButton
        IconComponent={WChevronLeft}
        onClick={handleLeftButton}
        ariaLabel="chevron left"
      />
      {viewProducts.map(({ name, price, imgPath, category, id }) => (
        <SecondaryImageCard
          price={price}
          imgPath={
            imgPath +
            imgOptimization({ width: 100, height: 100, auto: ['format'] })
          }
          alt={name}
          onClick={goToProduct({ productId: id, productCategory: category })}
          key={uuidv4()}
          testId={`${category}_${id}_CarouseBtn`}
        >
          {name}
        </SecondaryImageCard>
      ))}
      <IconButton
        IconComponent={WChevronRight}
        onClick={handleRightButton}
        ariaLabel="chevron right"
      />
    </ImgCarouselWrapper>
  );
};

const ImgCarouselWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  width: 100%;
`;

export default ImgCarousel;
