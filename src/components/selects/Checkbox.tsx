import styled from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';

interface CheckboxProps {
  children: string;
}

const Checkbox = ({ children }: CheckboxProps) => {
  return (
    <CheckboxWrapper>
      <CheckboxInput type="checkbox" value={children} name="contact" />
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
