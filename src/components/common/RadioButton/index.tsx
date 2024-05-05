import styled from 'styled-components';
import Text from '../Text';

const StyledRadioButton = styled.label`
  width: auto;
  height: auto;
  cursor: pointer;

  & [type='radio'],
  p {
    vertical-align: middle;
  }

  p {
    display: inline-block;
  }

  & [type='radio'] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;
    margin-right: 12px;

    &:checked {
      &::before {
        content: '';
        border-radius: 50%;
        width: 14px;
        height: 14px;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.black};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & [type='radio'] {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

interface RadioButtonProps {
  label: string;
}

const RadioButton = ({ label }: RadioButtonProps) => {
  return (
    <StyledRadioButton>
      <input type="radio" name="contact" value="radioButton" />
      <Text as="p" typography="Body">
        {label}
      </Text>
    </StyledRadioButton>
  );
};

export default RadioButton;
