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
  ${mixins.flexBox({ direction: 'column', align: 'start' })};
  gap: 24px;

  width: 100%;
  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const SecondaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  width: 100%;
`;

const TitleSkeleton = styled.p`
  ${LongLoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 600px;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const InfoSkeleton = styled.p`
  ${LongLoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 700px;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const SubSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 300px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const StepperSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 250px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const ButtonSkeleton = styled.p`
  ${LongLoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 700px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

export default ProductInfoSkeleton;
