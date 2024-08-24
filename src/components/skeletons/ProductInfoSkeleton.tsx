import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { LoadingAnimation, LongLoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';

import SecondaryCardSkeleton from './SecondaryCardSkeleton';

const ProductInfoSkeleton = () => {
  return (
    <ProductInfoSkeletonWrapper>
      <TitleSkeleton />
      <InfoSkeleton />
      <SubSkeleton />
      <StepperSkeleton />
      <SecondaryCardSkeletonWrapper>
        {Array.from({ length: 5 }).map(() => (
          <SecondaryCardSkeleton key={uuidv4()} />
        ))}
      </SecondaryCardSkeletonWrapper>
      <ButtonSkeleton />
    </ProductInfoSkeletonWrapper>
  );
};

const ProductInfoSkeletonWrapper = styled.div`
  padding: 40px;
  width: 100%;
  ${mixins.flexBox({ direction: 'column', align: 'start' })};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  gap: 24px;
`;

const SecondaryCardSkeletonWrapper = styled.div`
  width: 100%;
  ${mixins.flexBox({ justify: 'space-between' })}
`;

const TitleSkeleton = styled.p`
  width: 600px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LongLoadingAnimation}
`;

const InfoSkeleton = styled.p`
  width: 700px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LongLoadingAnimation}
`;

const SubSkeleton = styled.p`
  width: 300px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const StepperSkeleton = styled.p`
  width: 250px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const ButtonSkeleton = styled.p`
  width: 700px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LongLoadingAnimation}
`;

export default ProductInfoSkeleton;
