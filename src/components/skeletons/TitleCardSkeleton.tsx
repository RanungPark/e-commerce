import { LoadingAnimation } from '@styles/animation';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

const TitleCardSkeleton = () => {
  return (
    <TitleCardSkeletonWrapper>
      <TitleSkeleton />
    </TitleCardSkeletonWrapper>
  );
};

const TitleCardSkeletonWrapper = styled.div`
  height: 500px;
  width: 100%;
  padding: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  ${mixins.flexBox({ direction: 'column' })}
  position: relative;
`;

const TitleSkeleton = styled.div`
  width: 350px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.extralight};
  position: relative;
  overflow: hidden;
  ${LoadingAnimation}
`;

export default TitleCardSkeleton;
