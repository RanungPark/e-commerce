import BackgroundImageCard from '@components/cards/BackgroundImageCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from '@utils/api';
import { imgOptimization } from '@utils/img';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType, ProductBgType } from 'src/@types/product';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import CategoryLoading from './sections/CategoryLoading';

interface ICategory {
  products: ProductType[];
  productBg: ProductBgType;
}

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery<ICategory>({
    queryKey: [categoryName],
    queryFn: () => fetchCategory(categoryName!),
  });

  if (isLoading) {
    return <CategoryLoading />;
  }

  if (error || !data) {
    navigate('/error');
    return null;
  }

  const { productBg, products } = data;

  return (
    <CategoryPageWrapper>
      <BackgroundImageCard
        imgPath={
          productBg.imgPath + imgOptimization({ width: 800, height: 800 })
        }
      >
        {productBg.title}
      </BackgroundImageCard>
      <CategoryCardList>
        {products.map(({ id, name, price, imgPath, category }) => (
          <PrimaryImageCard
            key={uuidv4()}
            alt={name}
            onClick={() => navigate(`products/${id}`)}
            imgPath={imgPath + imgOptimization({ width: 500, height: 500 })}
            price={price}
            testId={`${category}_${id}`}
          >
            {name}
          </PrimaryImageCard>
        ))}
      </CategoryCardList>
    </CategoryPageWrapper>
  );
};

const CategoryPageWrapper = styled.main``;

const CategoryCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default CategoryPage;
