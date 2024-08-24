import { useContext, useState } from 'react';
import styled from 'styled-components';

import { RadioButtonContext } from '@contexts/RadioButtonContext';

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
  const context = useContext(RadioButtonContext);
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    checked ? onChange(value ?? children) : onChange('');
  };

  const handleClick = () => setChecked(prev => !prev);

  const isGroupChecked =
    isGrop && context.value !== undefined
      ? !!(value ?? children === context.value)
      : undefined;

  const handleGroupChange = () =>
    context.onChange && context.onChange(value ?? children);

  return (
    <RadioButtonWrapper>
      <Input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={isGrop ? isGroupChecked : checked}
        onChange={isGrop ? handleGroupChange : handleChange}
        onClick={!isGrop ? handleClick : undefined}
      />
      <Value>{children}</Value>
    </RadioButtonWrapper>
  );
};

const RadioButtonWrapper = styled.label`
  width: auto;
  height: auto;

  cursor: pointer;

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & input {
      border: 1px solid ${({ theme }) => theme.colors.gray};

      &::before {
        background-color: ${({ theme }) => theme.colors.gray};
      }
    }
  }
`;

const Input = styled.input`
  position: relative;

  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.lightgray};

  cursor: pointer;

  appearance: none;

  &:checked {
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;

      width: 14px;
      height: 14px;
      border-radius: 50%;

      background-color: ${({ theme }) => theme.colors.black};

      transform: translate(-50%, -50%);

      content: '';
    }
  }
`;

const Value = styled.p`
  ${({ theme }) => theme.typography.Body}
  display: inline-block;
`;
export default RadioButton;
