import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';
import TitleCardSkeleton from '@components/skeletons/TitleCardSkeleton';

const CategoryLoading = () => {
  return (
    <CategoryLoadingWrapper>
      <TitleCardSkeleton />
      <LoadingCardList>
        {Array.from({ length: 6 }).map(() => (
          <PrimaryCardSkeleton key={uuidv4()} />
        ))}
      </LoadingCardList>
    </CategoryLoadingWrapper>
  );
};

export default CategoryLoading;

const CategoryLoadingWrapper = styled.div``;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
