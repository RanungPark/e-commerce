import styled from 'styled-components';

import TextButton from '@components/buttons/TextButton';
import { mixins } from '@styles/Mixin';

interface ActionCardProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  buttonText: string;
  hasRightIcon?: boolean;
  hasLeftIcon?: boolean;
  testId?: string;
  buttonTestId?: string;
}

const ActionCard = ({
  children,
  buttonText,
  onClick,
  hasLeftIcon = false,
  hasRightIcon = false,
  testId,
  buttonTestId,
}: ActionCardProps) => {
  return (
    <ActionCardWrapper data-cy={testId}>
      {children}
      <ButtonWrapper>
        <TextButton
          onClick={onClick}
          hasLeftIcon={hasLeftIcon}
          hasRightIcon={hasRightIcon}
          testId={buttonTestId}
        >
          {buttonText}
        </TextButton>
      </ButtonWrapper>
    </ActionCardWrapper>
  );
};

const ActionCardWrapper = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading3}
  position: relative;

  width: 100%;
  height: 384px;
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
`;

export default ActionCard;
