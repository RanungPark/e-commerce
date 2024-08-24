import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';
import ProductInfoSkeleton from '@components/skeletons/ProductInfoSkeleton';
import { LoadingAnimation, LongLoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';

const ProductsLoading = () => {
  return (
    <ProductsLoadingWrapper>
      <MainSkeletonWrapper>
        <MainSkeleton />
      </MainSkeletonWrapper>
      <ProductInfoSkeleton />
      <SubSkeletonWrapper>
        <SubSkeleton />
      </SubSkeletonWrapper>
      <LoadingCardList>
        {Array.from({ length: 6 }).map(() => (
          <PrimaryCardSkeleton key={uuidv4()} />
        ))}
      </LoadingCardList>
    </ProductsLoadingWrapper>
  );
};

const ProductsLoadingWrapper = styled.div``;

const MainSkeletonWrapper = styled.div`
  ${mixins.flexBox({})}
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const MainSkeleton = styled.p`
  ${LongLoadingAnimation}
  overflow: hidden;
  position: relative;
  
  width: 500px;
  height: 500px;
  
  background-color: ${({ theme }) => theme.colors.extralight};
`;

const SubSkeletonWrapper = styled.div`
  ${mixins.flexBox({})}
  padding: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const SubSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;
  
  width: 300px;
  height: 45px;
  
  background-color: ${({ theme }) => theme.colors.extralight};
`;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default ProductsLoading;
