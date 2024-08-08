import ActionCard from '@components/cards/ActionCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import styled from 'styled-components';

export interface ActionCardAndImageCardListProps {
  index: number;
  onClick: (e: React.MouseEvent) => void;
  children: string;
  buttonText: string;
  imgPath: string;
  alt: string;
}

const ActionCardAndImageCardList = ({
  index,
  onClick,
  children,
  buttonText,
  imgPath,
  alt,
}: ActionCardAndImageCardListProps) => {
  if (index % 2 === 0) {
    return (
      <ActionCardAndImageCardListWrapper>
        <ActionCard
          onClick={onClick}
          buttonText={buttonText}
          hasRightIcon={true}
        >
          {children}
        </ActionCard>
        <PrimaryImageCard alt={alt} imgPath={imgPath} onClick={onClick} />
      </ActionCardAndImageCardListWrapper>
    );
  } else {
    return (
      <ActionCardAndImageCardListWrapper>
        <PrimaryImageCard alt={alt} imgPath={imgPath} onClick={onClick} />
        <ActionCard
          onClick={onClick}
          buttonText={buttonText}
          hasLeftIcon={true}
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
`;

export default ActionCardAndImageCardList;
