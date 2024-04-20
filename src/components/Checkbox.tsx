import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Check300 } from '../assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';

const StyledCheckbox = styled.label`
  ${({ theme }) => theme.typography('CaptionBold')};
  position: relative;
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

  & path {
    fill: ${({ theme }) => theme.colors.black};
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
        position: absolute;
        top: 20%;
        left: 4%;
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

interface ICheckbox {
  text: string;
}

const Checkbox = ({ text }: ICheckbox) => {
  const [check, setCheck] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setCheck(!check);
  };

  return (
    <StyledCheckbox onClick={handleClick}>
      <input type="checkbox" value="checkbox" checked={check} />
      {check && <Check300 />}
      <p>{text}</p>
    </StyledCheckbox>
  );
};

export default Checkbox;
