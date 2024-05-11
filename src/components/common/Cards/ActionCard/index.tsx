import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Text from '../../Text';
import Buttons from '../../Buttons';

interface ActionCardProps {
  label: string;
  buttonLabel: string;
}

const ActionCard = ({ label, buttonLabel }: ActionCardProps) => {
  return (
    <StyledActionCard>
      <Text as="h3" typography="Heading3" align="center">
        {label}
      </Text>
      <Buttons buttonType="none" label={buttonLabel}></Buttons>
    </StyledActionCard>
  );
};

const StyledActionCard = styled.section`
  ${mixins.flexBox({})}
  width: 100%;
  height: 25vw;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 24px;

  & h3 {
    width: 100%;
    height: auto;
  }

  & button {
    position: absolute;
    bottom: 24px;
  }
`;

export default ActionCard;
