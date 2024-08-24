import styled from 'styled-components';

import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';

const PrimaryCardSkeleton = () => {
  return (
    <PrimaryCardSkeletonWrapper>
      <ImgSkeleton />
      <ContentWrapper>
        <NameSkeleton />
        <PriceSkeleton />
      </ContentWrapper>
    </PrimaryCardSkeletonWrapper>
  );
};

const PrimaryCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  gap: 8px;

  width: 100%;
  height: ${768 / 2}px;
  padding: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ContentWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  gap: 4px;
`;

const ImgSkeleton = styled.div`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 250px;
  height: 250px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const NameSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 150px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

const PriceSkeleton = styled.p`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 130px;
  height: 15px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

export default PrimaryCardSkeleton;
