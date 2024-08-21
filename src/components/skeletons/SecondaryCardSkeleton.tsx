import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';
import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

const ContentWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 4px;
`;

const ImgSkeleton = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const NameSkeleton = styled.p`
  width: 80px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

const PriceSkeleton = styled.p`
  width: 60px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

export default SecondaryCardSkeleton;
