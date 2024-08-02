import styled from 'styled-components';
import IconButton from './IconButton';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';
import { mixins } from '@styles/Mixin';

interface TextButtonProps {
  onClick: () => void;
  children: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  disabled?: boolean;
}

const TextButton = ({
  onClick,
  children,
  hasLeftIcon = false,
  hasRightIcon = false,
  disabled = false,
}: TextButtonProps) => {
  return (
    <TextButtonWrapper onClick={onClick} disabled={disabled}>
      {hasLeftIcon ? <IconButton IconComponent={ArrowLeft} /> : <></>}
      {children}
      {hasRightIcon ? <IconButton IconComponent={ArrowRight} /> : <></>}
    </TextButtonWrapper>
  );
};

const TextButtonWrapper = styled.button`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Links}

  gap: 4px;
  text-transform: capitalize;
  width: auto;
  height: auto;
  background-color: inherit;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover::after,
  &:active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 0.5px;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export default TextButton;
