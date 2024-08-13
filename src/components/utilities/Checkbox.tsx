import styled from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { useContext, useState } from 'react';
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
      <CheckboxInput
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
        onClick={() => !isGrop && setChecked(prev => !prev)}
      />
      <Check />
      <CheckboxChildrenWrapper>{children}</CheckboxChildrenWrapper>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.label`
  width: auto;
  height: auto;
  position: relative;
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.colors.gray};
  }

  & svg {
    display: none;
  }

  & input,
  p {
    vertical-align: text-top;
  }

  &:active {
    & input {
      border: 1px solid ${({ theme }) => theme.colors.darkgray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 24px;
  height: 24px;
  margin-right: 12px;
  cursor: pointer;

  &:checked {
    & + svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

const CheckboxChildrenWrapper = styled.p`
  ${({ theme }) => theme.typography.CaptionBold}
  display: inline-block;
`;

export default Checkbox;
