import { PartialDelete } from 'src/@types/utils';
import { mixins } from 'src/styles/Mixin';
import styled from 'styled-components';
import { ReactComponent as ArrowDropDown } from 'src/assets/icons/wght300/arrow_drop_down_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as ArrowDropUp } from 'src/assets/icons/wght300/arrow_drop_up_FILL0_wght300_GRAD0_opsz24.svg';
import { SelectBoxProps } from '.';

interface LabelProps extends SelectBoxProps {
  isOpen: boolean;
  selectOption: string;
  onClick: React.MouseEventHandler<HTMLLabelElement>;
}

type DeleteOptionFromLabelProps = PartialDelete<LabelProps, 'options'>;
type LabelWrapperProps = PartialDelete<DeleteOptionFromLabelProps, 'onClick'>;
type InputWrapperProps = PartialDelete<
  DeleteOptionFromLabelProps,
  'onClick' | 'isOpen'
>;

const Label = ({
  isOpen,
  selectOption,
  placeholder,
  onClick,
}: DeleteOptionFromLabelProps) => {
  return (
    <StyledLabel
      onClick={onClick}
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
      {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<LabelWrapperProps>`
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
      return `1px solid ${theme.colors.black}`;
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
