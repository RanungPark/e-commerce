import { PartialDelete } from 'src/@types/utils';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { ReactComponent as CaretDown } from '@assets/icons/wght300/CaretDown.svg';
import { ReactComponent as CaretUp } from '@assets/icons/wght300/CaretUp.svg';
import { SelectBoxProps } from '.';

type DeleteOptionFromLabelProps = PartialDelete<
  SelectBoxProps,
  'options' | 'handleClickOfLi'
>;

type LabelWrapperProps = PartialDelete<
  DeleteOptionFromLabelProps,
  'handleClickOfLabel'
>;

type InputWrapperProps = PartialDelete<
  DeleteOptionFromLabelProps,
  'handleClickOfLabel' | 'isOpen'
>;

const Label = ({
  isOpen,
  selectOption,
  placeholder,
  handleClickOfLabel,
}: DeleteOptionFromLabelProps) => {
  return (
    <LabelWrapper
      onClick={handleClickOfLabel}
      placeholder={placeholder}
      isOpen={isOpen}
      selectOption={selectOption}
    >
      <InputWrapper
        type="text"
        readOnly
        value={selectOption}
        selectOption={selectOption}
        placeholder={placeholder}
      />
      {isOpen ? <CaretUp /> : <CaretDown />}
    </LabelWrapper>
  );
};

const LabelWrapper = styled.label<LabelWrapperProps>`
  ${mixins.flexBox({ justify: 'space-between' })}
  width: 100%;
  max-height: 56px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme, selectOption, placeholder, isOpen }) => {
    if (selectOption === placeholder) {
      return `1px solid ${
        isOpen ? theme.colors.darkgray : theme.colors.lightgray
      }`;
    } else {
      return `1px solid ${theme.colors.lightgray}`;
    }
  }};

  cursor: pointer;
`;

const InputWrapper = styled.input<InputWrapperProps>`
  ${({ theme }) => theme.typography.Caption};
  color: ${({ theme, selectOption, placeholder }) =>
    selectOption === placeholder ? theme.colors.gray : theme.colors.black};
`;

export default Label;
