import styled from 'styled-components';
import { ReactComponent as Check300 } from 'src/assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';
import Text from '../Text';
import { CheckBoxStyle, RadioButtonStyle } from './CheckBoxOrRadioButton.css';

interface CheckBoxOrRadioButtonProps {
  label: string;
  inputType: 'checkbox' | 'radio';
}

type PickCheckBoxOrRadioButtonProps = Pick<
  CheckBoxOrRadioButtonProps,
  'inputType'
>;

const CheckBoxOrRadioButton = ({
  label,
  inputType,
}: CheckBoxOrRadioButtonProps) => {
  return (
    <StyledCheckBoxOrRadioButton inputType={inputType}>
      <input
        type={inputType === 'checkbox' ? 'checkbox' : 'radio'}
        value={label}
        name="contact"
      />
      {inputType === 'checkbox' ? <Check300 /> : <></>}
      <Text
        as="p"
        typography={inputType === 'checkbox' ? 'CaptionBold' : 'Body'}
      >
        {label}
      </Text>
    </StyledCheckBoxOrRadioButton>
  );
};

const StyledCheckBoxOrRadioButton = styled.label<PickCheckBoxOrRadioButtonProps>`
  width: auto;
  height: auto;
  cursor: pointer;

  p {
    display: inline-block;
  }

  & input {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 24px;
    height: 24px;
    margin-right: 12px;
    cursor: pointer;
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ inputType }) =>
    inputType === 'checkbox' ? CheckBoxStyle : RadioButtonStyle}
`;

export default CheckBoxOrRadioButton;
