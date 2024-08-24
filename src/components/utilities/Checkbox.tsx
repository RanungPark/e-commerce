import { useContext, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { CheckboxContext } from '@contexts/CheckboxContext';

interface CheckboxProps {
  name?: string;
  value?: string;
  children: string;
  onChange?: (checked: string) => void;
  isGrop?: boolean;
}

const Checkbox = ({
  name,
  value,
  children,
  onChange = () => {},
  isGrop = true,
}: CheckboxProps) => {
  const context = useContext(CheckboxContext);
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    checked ? onChange(value ?? children) : onChange('');
  };

  const isGroupChecked = isGrop && context.isChecked(value ?? children);
  const toggleGroupValue = isGrop ? context.toggleValue : null;

  return (
    <CheckboxWrapper>
      <Input
        type="checkbox"
        name={name}
        value={value ?? children}
        checked={isGrop ? isGroupChecked : checked}
        onChange={
          isGrop
            ? ({ target: { checked } }) =>
                toggleGroupValue!({ checked, value: value ?? children })
            : handleChange
        }
        onClick={() => !isGrop && setChecked((prev) => !prev)}
      />
      <Check />
      <Value>{children}</Value>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.label`
  position: relative;

  width: auto;
  height: auto;

  cursor: pointer;

  & svg {
    display: none;
  }

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & input {
      border: 1px solid ${({ theme }) => theme.colors.darkgray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  background-color: ${({ theme }) => theme.colors.lightgray};

  cursor: pointer;

  appearance: none;

  &:checked {
    & + svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const Value = styled.p`
  ${({ theme }) => theme.typography.CaptionBold}
  display: inline-block;
`;

export default Checkbox;
