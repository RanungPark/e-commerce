import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

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
  height: ${768 / 2}px;
  width: 100%;
  padding: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  ${mixins.flexBox({ direction: 'column' })}
  gap: 8px;
`;

const ContentWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  gap: 4px;
`;

const ImgSkeleton = styled.div`
  width: 250px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const NameSkeleton = styled.p`
  width: 150px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const PriceSkeleton = styled.p`
  width: 130px;
  height: 15px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

export default PrimaryCardSkeleton;
