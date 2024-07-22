import styled from 'styled-components';
import Option from './Option';
import Label from './Label';

export interface SelectBoxProps {
  options: string[];
  placeholder: string;
  selectOption: string;
  isOpen: boolean;
  handleClickOfLabel: React.MouseEventHandler<HTMLLabelElement>;
  handleClickOfLi: React.MouseEventHandler<HTMLLIElement>;
}

const SelectBox = ({
  options,
  placeholder,
  selectOption,
  isOpen,
  handleClickOfLabel,
  handleClickOfLi,
}: SelectBoxProps) => {
  return (
    <>
      <Label
        handleClickOfLabel={handleClickOfLabel}
        isOpen={isOpen}
        selectOption={selectOption}
        placeholder={placeholder}
      />
      {isOpen ? (
        <OptionsWrapper>
          {options.map(option => (
            <Option
              key={option}
              handleClickOfLi={handleClickOfLi}
              option={option}
            >
              {option}
            </Option>
          ))}
        </OptionsWrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const OptionsWrapper = styled.ul`
  margin-top: 8px;
`;

export default SelectBox;
