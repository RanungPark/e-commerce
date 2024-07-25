import ImageCards from '@components/common/Cards/ImageCards';
import Loading from '@components/common/Loading';
import Text from '@components/common/Text';
import { mixins } from '@styles/Mixin';
import { useQuery } from '@tanstack/react-query';
import { fetchCategory } from '@utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType, RepType } from 'src/@types/product';
import styled from 'styled-components';
interface ICategory {
  products: ProductType[];
  rep: RepType;
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

  if (isLoading) return <Loading />;
  if (error) goToNotFound();

  return (
    <>
      <CategoryHeader
        productImg={data?.rep.img ?? `https://via.placeholder.com/786x500.jpg`}
        className="br-1 bl-1 bb-1"
      >
        <Text as="h1" typography="Heading1" color="white">
          {data?.rep?.type}
        </Text>
      </CategoryHeader>
      <CardsWrapper className="br-1">
        {data?.products.map(product => (
          <ImageCards
            key={product.id}
            label={product.name}
            productImg={product.productImg}
            price={`price ${product.price}$`}
            cardType="main"
            handleClick={goToProduct(product.id)}
          />
        ))}
      </CardsWrapper>
    </>
  );
};

const CategoryHeader = styled.section<{ productImg: string }>`
  ${mixins.flexBox({})}

  background-image: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ),${({
    productImg,
  }) => `url(${productImg})`};
  background-size: cover;
  width: 100%;
  height: 500px;
`;

const CardsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default CategoryPage;
