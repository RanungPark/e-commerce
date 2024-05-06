import { ReactComponent as East300 } from 'src/assets/icons/wght300/east_wght300_opsz24.svg';
import { ReactComponent as West300 } from 'src/assets/icons/wght300/west_300_opsz24.svg';
import Text from '../Text';
import { PartialRequired } from 'src/@types/utils';
import styled from 'styled-components';
import { StyledButton } from './Buttons.css';

const StyledButtons = styled.button<PickStyledButtonsProps>`
  ${({ buttonType, colorType }) =>
    buttonType === 'filled'
      ? StyledButton.filled({ colorType })
      : StyledButton.none()}
`;

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isDisabled: boolean;
  arrowIcon: 'none' | 'left' | 'right';
  colorType: 'primary' | 'secondary' | 'tertiary';
  textOrIcon: 'withText' | 'onlyIcon';
  buttonType: 'filled' | 'none';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type RequiredFromButtonsProps = PartialRequired<
  ButtonsProps,
  'label' | 'buttonType'
>;

type PickStyledButtonsProps = Pick<ButtonsProps, 'buttonType' | 'colorType'>;

export type PickFilledButtonProps = Pick<ButtonsProps, 'colorType'>;

type PickPublicComponentProps = Pick<
  ButtonsProps,
  'label' | 'arrowIcon' | 'textOrIcon' | 'buttonType'
>;

const PublicComponent = ({
  arrowIcon,
  label,
  textOrIcon,
  buttonType,
}: PickPublicComponentProps) => {
  return (
    <>
      {arrowIcon === 'left' && <West300 />}
      {buttonType === 'filled' ? (
        <Text as="p" typography="Button">
          {label}
        </Text>
      ) : (
        <Text as="p" typography="Links">
          {textOrIcon === 'withText' && label}
        </Text>
      )}
      {arrowIcon === 'right' && <East300 />}
    </>
  );
};

const Buttons = ({
  label,
  colorType = 'primary',
  arrowIcon = 'none',
  textOrIcon = 'withText',
  buttonType,
  isDisabled = false,
  onClick,
}: RequiredFromButtonsProps) => {
  return (
    <StyledButtons
      disabled={isDisabled}
      onClick={onClick}
      colorType={colorType}
      buttonType={buttonType}
    >
      <PublicComponent
        arrowIcon={arrowIcon}
        label={label}
        textOrIcon={textOrIcon}
        buttonType={buttonType}
      />
    </StyledButtons>
  );
};

export default Buttons;
