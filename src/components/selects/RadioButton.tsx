import styled from 'styled-components';

interface RadioButtonProps {
  children: string;
}

const RadioButton = ({ children }: RadioButtonProps) => {
  return (
    <RadioButtonWrapper>
      <RadioButtonInput type="radio" value={children} name="contact" />
      <RaduoButtonChildrenWrapper>{children}</RaduoButtonChildrenWrapper>
    </RadioButtonWrapper>
  );
};

const RadioButtonWrapper = styled.label`
  width: auto;
  height: auto;
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.colors.gray};
  }

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    & input {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const RadioButtonInput = styled.input`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;
  border-radius: 50%;
  position: relative;

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
`;

const RaduoButtonChildrenWrapper = styled.p`
  ${({ theme }) => theme.typography.Body}
  display: inline-block;
`;
export default RadioButton;
