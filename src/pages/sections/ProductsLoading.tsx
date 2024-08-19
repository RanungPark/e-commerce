import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';
import ProductInfoSkeleton from '@components/skeletons/ProductInfoSkeleton';
import { LoadingAnimation, LongLoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

const ProductsLoading = () => {
  return (
    <div>
      <MainWrapper>
        <p />
      </MainWrapper>
      <ProductInfoSkeleton />
      <SubWrapper>
        <p />
      </SubWrapper>
      <LoadingCardList>
        {Array.from({ length: 6 }).map(() => (
          <PrimaryCardSkeleton />
        ))}
      </LoadingCardList>
    </div>
  );
};

const MainWrapper = styled.div`
  ${mixins.flexBox({})}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 0;

  & p {
    width: 500px;
    height: 500px;
    background-color: ${({ theme }) => theme.colors.extralight};
    position: relative;
    overflow: hidden;
    ${LongLoadingAnimation}
  }
`;

const SubWrapper = styled.div`
  ${mixins.flexBox({})}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 64px;

  & p {
    width: 300px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.extralight};
    position: relative;
    overflow: hidden;
    ${LoadingAnimation}
  }
`;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default ProductsLoading;
