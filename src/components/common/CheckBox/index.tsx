import styled from 'styled-components';
import { ReactComponent as Check300 } from 'src/assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';
import Text from '../Text';

const StyledCheckbox = styled.label`
  position: relative;
  width: auto;
  height: auto;
  cursor: pointer;

  & svg {
    display: none;
  }

  & [type='checkbox'],
  p {
    vertical-align: text-top;
  }

  p {
    display: inline-block;
  }

  & [type='checkbox'] {
    appearance: none;
    background-color: ${({ theme }) => theme.colors.lightgray};
    border: 1px solid ${({ theme }) => theme.colors.black};
    width: 24px;
    height: 24px;
    margin-right: 12px;

    &:checked {
      & + svg {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.gray};

    & [type='checkbox'] {
      border: 1px solid ${({ theme }) => theme.colors.darkgray};
    }

    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  }
`;

interface CheckboxProps {
  label: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" value="checkbox" name="contact" />
      <Check300 />
      <Text as="p" typography="CaptionBold">
        {label}
      </Text>
    </StyledCheckbox>
  );
};

export default Checkbox;
