import TextButton from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface ActionCardProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  buttonText: string;
  hasRightIcon?: boolean;
  hasLeftIcon?: boolean;
}

const ActionCard = ({
  children,
  buttonText,
  onClick,
  hasLeftIcon = false,
  hasRightIcon = false,
}: ActionCardProps) => {
  return (
    <ActionCardWrapper className="bb-1 p-4">
      {children}
      <ButtonWrapper>
        <TextButton
          onClick={onClick}
          hasLeftIcon={hasLeftIcon}
          hasRightIcon={hasRightIcon}
        >
          {buttonText}
        </TextButton>
      </ButtonWrapper>
    </ActionCardWrapper>
  );
};

const ActionCardWrapper = styled.div`
  ${({ theme }) => theme.typography.Heading3}
  ${mixins.flexBox({})}
  position: relative;
  width: 100%;
  height: 384px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 32px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
`;

export default ActionCard;
