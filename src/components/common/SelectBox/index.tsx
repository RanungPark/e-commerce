import { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import Label from './Label';

const OptionsWrapper = styled.ul`
  margin-top: 8px;
`;

export interface SelectBoxProps {
  options: string[];
  placeholder: string;
}

const SelectBox = ({ options, placeholder }: SelectBoxProps) => {
  const [selectOption, setSelectOption] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOfLabel = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => {
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
    <>
      <Label
        onClick={handleClickOfLabel}
        isOpen={isOpen}
        selectOption={selectOption}
        placeholder={placeholder}
      />
      {isOpen && (
        <OptionsWrapper>
          {options.map(option => (
            <Option onClick={handleClickOfLi} value={option}>
              {option}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </>
  );
};

export default SelectBox;
