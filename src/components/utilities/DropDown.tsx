import IconButton from '@components/buttons/IconButton';
import { ReactComponent as CaretDown } from '@assets/icons/wght300/CaretDown.svg';
import { ReactComponent as CaretUp } from '@assets/icons/wght300/CaretUp.svg';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { mixins } from '@styles/Mixin';
import DropDownOptionList from '@components/lists/DropDownOptionList';

interface DropDownProps {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

type DropDownLabelProps = Pick<DropDownProps, 'disabled'>;

const DropDown = ({
  options,
  placeholder,
  value,
  onChange,
  disabled = false,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    if (!disabled) {
      setIsOpen(prev => !prev);
    }
  };

  const handleClickLi = (e: React.MouseEvent) => {
    const optionValue = e.currentTarget.getAttribute('data-value');
    if (optionValue) {
      onChange(optionValue);
      setIsOpen(false);
    }
  };

  return (
    <>
      <DropDownLabel className="p-2" disabled={disabled}>
        <DropDownInput
          type="text"
          readOnly
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onClick={handleIsOpen}
        />
        {isOpen ? (
          <IconButton
            onClick={e => e.preventDefault()}
            IconComponent={CaretUp}
          />
        ) : (
          <IconButton
            onClick={e => e.preventDefault()}
            IconComponent={CaretDown}
          />
        )}
      </DropDownLabel>
      {isOpen ? (
        <DropDownOptionList onClick={handleClickLi} options={options} />
      ) : (
        <></>
      )}
    </>
  );
};

const defalutStyle = css`
  background-color: ${({ theme }) => theme.colors.white};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }
  &:focus-within {
    box-shadow: ${({ theme }) => `0 0 0 1px ${theme.colors.gray}`};
  }
  & path {
    fill: ${({ theme }) => theme.colors.black};
  }
  cursor: pointer;
  & button {
    cursor: pointer;
  }
`;

const disabledStyle = css`
  background-color: ${({ theme }) => theme.colors.extralight};
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
  }
  &:focus-within {
    box-shadow: 0 0 0;
  }
  & path {
    fill: ${({ theme }) => theme.colors.lightgray};
  }
  cursor: not-allowed;
  & button {
    cursor: not-allowed;
  }
`;

const DropDownLabel = styled.label<DropDownLabelProps>`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ disabled }) => (!disabled ? defalutStyle : disabledStyle)}
  
  width: 100%;
  max-height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const DropDownInput = styled.input`
  ${({ theme }) => theme.typography.Caption};
  flex: 1;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default DropDown;
