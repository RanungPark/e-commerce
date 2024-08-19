import PrimaryCardSkeleton from '@components/skeletons/PrimaryCardSkeleton';
import TitleCardSkeleton from '@components/skeletons/TitleCardSkeleton';
import styled from 'styled-components';

const CategoryLoading = () => {
  return (
    <div>
      <TitleCardSkeleton />
      <LoadingCardList>
        {Array.from({ length: 6 }).map(() => (
          <PrimaryCardSkeleton />
        ))}
      </LoadingCardList>
    </div>
  );
};

export default CategoryLoading;

const LoadingCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
