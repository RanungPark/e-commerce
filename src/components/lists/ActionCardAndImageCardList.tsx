import styled from 'styled-components';

import ActionCard from '@components/cards/ActionCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';

export interface ActionCardAndImageCardListProps {
  index: number;
  onClick: (e: React.MouseEvent) => void;
  children: string;
  buttonText: string;
  imgPath: string;
  alt: string;
  actionTestId?: string;
  imgTestId?: string;
}

const ActionCardAndImageCardList = ({
  index,
  onClick,
  children,
  buttonText,
  imgPath,
  alt,
  actionTestId,
  imgTestId,
}: ActionCardAndImageCardListProps) => {
  if (index % 2 === 0) {
    return (
      <ActionCardAndImageCardListWrapper>
        <ActionCard
          onClick={onClick}
          buttonText={buttonText}
          hasRightIcon={true}
          testId={actionTestId}
          buttonTestId="actionCardBtn"
        >
          {children}
        </ActionCard>
        <PrimaryImageCard
          alt={alt}
          imgPath={imgPath}
          onClick={onClick}
          testId={imgTestId}
        />
      </ActionCardAndImageCardListWrapper>
    );
  } else {
    return (
      <ActionCardAndImageCardListWrapper>
        <PrimaryImageCard
          alt={alt}
          imgPath={imgPath}
          onClick={onClick}
          testId={imgTestId}
        />
        <ActionCard
          onClick={onClick}
          buttonText={buttonText}
          hasLeftIcon={true}
          testId={actionTestId}
          buttonTestId="actionCardBtn"
        >
          {children}
        </ActionCard>
      </ActionCardAndImageCardListWrapper>
    );
  }
};

const ActionCardAndImageCardListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default ActionCardAndImageCardList;
