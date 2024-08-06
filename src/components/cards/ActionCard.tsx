import TextButton from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface ActionCardProps {
  onClick: (e: React.MouseEvent) => void;
  children: string;
  buttonText: string;
  hasRightIcon?: boolean;
  hasLeftIcon?: boolean;
}

const ActionCard = ({
  children,
  buttonText,
  onClick,
  hasLeftIcon,
  hasRightIcon,
}: ActionCardProps) => {
  return (
    <ActionCardWrapper className="bb-1 bl-1 p-4">
      {children}
      <ActionCardButtonWrapper>
        <TextButton
          onClick={onClick}
          hasLeftIcon={hasLeftIcon}
          hasRightIcon={hasRightIcon}
        >
          {buttonText}
        </TextButton>
      </ActionCardButtonWrapper>
    </ActionCardWrapper>
  );
};

const ActionCardWrapper = styled.section`
  ${({ theme }) => theme.typography.Heading3}
  ${mixins.flexBox({})}
  position: relative;
  width: 100%;
`;

const ActionCardButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
`;

export default ActionCard;
