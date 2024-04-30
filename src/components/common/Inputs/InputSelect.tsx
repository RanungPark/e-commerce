import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDropDown } from 'src/assets/icons/wght300/arrow_drop_down_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as ArrowDropUp } from 'src/assets/icons/wght300/arrow_drop_up_FILL0_wght300_GRAD0_opsz24.svg';
import { mixins } from 'src/styles/Mixin';

const StyledInputSelect = styled.div``;

const LabelWrapper = styled.div<{ isOpen: boolean; selectOption: string }>`
  ${mixins.flexBox(undefined, 'space-between')}
  ${({ theme }) => theme.typography.Caption};
  width: 100%;
  max-height: 56px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ isOpen, theme, selectOption }) => {
    if (selectOption === '-Select-') {
      return `1px solid ${
        isOpen ? theme.colors.darkgray : theme.colors.lightgray
      }`;
    } else {
      return `1px solid ${theme.colors.black}`;
    }
  }};
  color: ${({ selectOption, theme }) =>
    selectOption === '-Select-' ? theme.colors.gray : theme.colors.black};
  cursor: pointer;
`;

const OptionsWrapper = styled.ul`
  margin-top: 8px;
`;

const OptionItemWrapper = styled.li`
  ${mixins.flexBox(undefined, 'start')}
  ${({ theme }) => theme.typography.CaptionBold};
  padding: 16px;
  width: 100%;
  max-height: 56px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkgray};
  color: ${({ theme }) => theme.colors.black};
  border-bottom: none;

  &:last-of-type {
    border: 1px solid ${({ theme }) => theme.colors.darkgray};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

type InputSelectProps = {
  options: string[];
};

const InputSelect = ({ options }: InputSelectProps) => {
  const [selectOption, setSelectOption] = useState('-Select-');
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOfLabel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOfLi = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    const selectOptionValue = e.currentTarget.getAttribute('value');
    selectOptionValue && setSelectOption(selectOptionValue);
    setIsOpen(!isOpen);
  };

  return (
    <StyledInputSelect>
      <LabelWrapper
        onClick={handleClickOfLabel}
        isOpen={isOpen}
        selectOption={selectOption}
      >
        {selectOption}
        {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </LabelWrapper>
      <OptionsWrapper>
        {isOpen &&
          options.map(option => (
            <OptionItemWrapper onClick={handleClickOfLi} value={option}>
              {option}
            </OptionItemWrapper>
          ))}
      </OptionsWrapper>
    </StyledInputSelect>
  );
};

export default InputSelect;
