import { RadioButtonContext } from '@contexts/RadioButtonContext';
import { useContext, useState } from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  name?: string;
  value?: string;
  children: string;
  defaultChecked?: boolean;
  onChange?: (checked: string) => void;
  isGrop?: boolean;
}

const RadioButton = ({
  name,
  value,
  children,
  defaultChecked,
  isGrop = true,
  onChange = () => {},
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(false);
  const context = useContext(RadioButtonContext);

  const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    checked ? onChange(value ?? children) : onChange('');
  };

  if (!isGrop) {
    return (
      <RadioButtonWrapper>
        <RadioButtonInput
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={handleChagne}
          onClick={() => setChecked(prev => !prev)}
        />
        <RaduoButtonChildrenWrapper>{children}</RaduoButtonChildrenWrapper>
      </RadioButtonWrapper>
    );
  }

  if (isGrop) {
    return (
      <RadioButtonWrapper>
        <RadioButtonInput
          type="radio"
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={
            context.value !== undefined
              ? !!(value ?? children === context.value)
              : undefined
          }
          onChange={() =>
            context.onChange && context.onChange(value ?? children)
          }
        />
        <RaduoButtonChildrenWrapper>{children}</RaduoButtonChildrenWrapper>
      </RadioButtonWrapper>
    );
  }
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