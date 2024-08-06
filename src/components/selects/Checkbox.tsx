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
  const [checked, setChecked] = useState(false);
  const context = useContext(CheckboxContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    checked ? onChange(value ?? children) : onChange('');
  };

  if (!isGrop) {
    return (
      <CheckboxWrapper>
        <CheckboxInput
          type="checkbox"
          name={name}
          value={value ?? children}
          checked={checked}
          onChange={handleChange}
          onClick={() => setChecked(prev => !prev)}
        />
        <Check />
        <CheckboxChildrenWrapper>{children}</CheckboxChildrenWrapper>
      </CheckboxWrapper>
    );
  }

  const { isChecked, toggleValue } = context;

  if (isGrop) {
    return (
      <CheckboxWrapper>
        <CheckboxInput
          type="checkbox"
          name={name}
          value={value ?? children}
          checked={isChecked(value ?? children)}
          onChange={({ target: { checked } }) =>
            toggleValue({ checked, value: value ?? children })
          }
        />
        <Check />
        <CheckboxChildrenWrapper>{children}</CheckboxChildrenWrapper>
      </CheckboxWrapper>
    );
  }
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
