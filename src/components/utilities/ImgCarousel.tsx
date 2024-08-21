import IconButton from '@components/buttons/IconButton';
import SecondaryImageCard from '@components/cards/SecondaryImageCard';
import { useNavigate } from 'react-router';
import { ProductType } from 'src/@types/product';
import styled from 'styled-components';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import { mixins } from '@styles/Mixin';
import { useState } from 'react';
import { imgOptimization } from '@utils/img';
import { v4 as uuidv4 } from 'uuid';
interface ImgCarouselProps {
  products: ProductType[];
}

interface GoToProductProps {
  productCategory: string;
  productId: number;
}

const ImgCarousel = ({ products }: ImgCarouselProps) => {
  const [viewProducts, setViewProducts] = useState(
    products.filter(({ id }) => id <= 5)
  );

  const handleLeftButton = () => {
    if (viewProducts[0].id === 1) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) => viewProducts[0].id - 1 <= id && id <= viewProducts[4].id - 1
      );
      setViewProducts(newViewProducts);
    }
  };

  const handleRightButton = () => {
    if (viewProducts[4].id === products.length) return;
    else {
      const newViewProducts = products.filter(
        ({ id }) => viewProducts[0].id + 1 <= id && id <= viewProducts[4].id + 1
      );
      setViewProducts(newViewProducts);
    }
  };

  const navigate = useNavigate();

  const goToProduct =
    ({ productCategory, productId }: GoToProductProps) =>
    () => {
      navigate(
        `/categories/${productCategory.replace(' ', '_')}/products/${productId}`
      );
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
  width: 100%;
  ${mixins.flexBox({ justify: 'space-between' })}
`;

export default ImgCarousel;
