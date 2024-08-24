import styled from 'styled-components';

import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';

const SecondaryCardSkeleton = () => {
  return (
    <SecondaryCardSkeletonWrapper>
      <ImgSkeleton />
      <ContentWrapper>
        <NameSkeleton />
        <PriceSkeleton />
      </ContentWrapper>
    </SecondaryCardSkeletonWrapper>
  );
};

const SecondaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;

  width: 100%;
`;

const ContentWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 4px;
`;

const ImgSkeleton = styled.div`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 100px;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const NameSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 80px;
  height: 10px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const PriceSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 60px;
  height: 10px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

export default SecondaryCardSkeleton;
