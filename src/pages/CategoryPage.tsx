import BackgroundImageCard from '@components/cards/BackgroundImageCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import Loading from '@components/publics/Loading';
import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from '@utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType, ProductBgType } from 'src/@types/product';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface ICategory {
  products: ProductType[];
  productBg: ProductBgType;
}

const CategoryPage = () => {
  const { categoryName } = useParams();

  const { data, isLoading, error } = useQuery<ICategory>({
    queryKey: [categoryName],
    queryFn: () => fetchCategory(categoryName!),
  });

  const navigate = useNavigate();

  const goToNotFound = () => {
    navigate('/error');
  };

  const goToProduct = (productId: number) => () => {
    navigate(`products/${productId}`);
  };

  if (!data) {
    if (isLoading) return <Loading />;
    if (error) goToNotFound();
  }

  if (data) {
    const { productBg, products } = data;

    return (
      <CategoryPageWrapper>
        <BackgroundImageCard imgPath={productBg.imgPath}>
          {productBg.title}
        </BackgroundImageCard>
        <CategoryCardList>
          {products.map(({ id, name, price, imgPath }) => (
            <PrimaryImageCard
              key={uuidv4()}
              alt={name}
              onClick={goToProduct(id)}
              imgPath={imgPath}
              price={price}
            >
              {name}
            </PrimaryImageCard>
          ))}
        </CategoryCardList>
      </CategoryPageWrapper>
    );
  }
};
const CategoryPageWrapper = styled.main``;

const CategoryCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > section:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default CategoryPage;
