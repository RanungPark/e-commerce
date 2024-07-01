import styled from 'styled-components';
import { mixins } from '@styles/Mixin';
import Text from '../../Text';
import Buttons from '../../Buttons';
import { PartialOptional } from 'src/@types/utils';

interface ActionCardProps {
  label: string;
  buttonLabel: string;
  leftIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  rightIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

type OptionalrFromActionCardProps = PartialOptional<
  ActionCardProps,
  'leftIcon' | 'rightIcon' | 'handleClick'
>;

const ActionCard = ({
  label,
  buttonLabel,
  rightIcon,
  leftIcon,
  handleClick,
}: OptionalrFromActionCardProps) => {
  return (
    <StyledActionCard className="bb-1 bl-1">
      <Text as="h3" typography="Heading3" align="center">
        {label}
      </Text>
      <Buttons
        buttonType="none"
        label={buttonLabel}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        handleClick={handleClick}
      ></Buttons>
    </StyledActionCard>
  );
};

const StyledActionCard = styled.section`
  ${mixins.flexBox({})}
  width: 100%;
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
