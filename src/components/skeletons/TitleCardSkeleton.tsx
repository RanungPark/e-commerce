import styled from 'styled-components';

import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';

const TitleCardSkeleton = () => {
  return (
    <TitleCardSkeletonWrapper>
      <TitleSkeleton />
    </TitleCardSkeletonWrapper>
  );
};

const TitleCardSkeletonWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  position: relative;

  width: 100%;
  height: 500px;
  padding: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const TitleSkeleton = styled.div`
  ${LoadingAnimation}
  overflow: hidden;
  position: relative;

  width: 350px;
  height: 80px;

  background-color: ${({ theme }) => theme.colors.extralight};
`;

export default TitleCardSkeleton;
