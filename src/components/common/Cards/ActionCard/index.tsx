import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Text from '../../Text';
import Buttons from '../../Buttons';

const StyledActionCard = styled.section`
  ${mixins.flexBox({})}
  width: 100%;
  height: 25vw;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  border-left: 1px solid ${({ theme }) => theme.colors.black};
  position: relative;
  padding: 24px;

  & button {
    position: absolute;
    bottom: 24px;
  }
`;

interface ActionCardProps {
  label: string;
  buttonLabel: string;
}

const ActionCard = ({ label, buttonLabel }: ActionCardProps) => {
  return (
    <StyledActionCard>
      <Text
        as="h3"
        typography="Heading3"
        align="center"
        width="100%"
        height="auto"
      >
        {label}
      </Text>
      <Buttons buttonType="none" label={buttonLabel}></Buttons>
    </StyledActionCard>
  );
};

export default ActionCard;