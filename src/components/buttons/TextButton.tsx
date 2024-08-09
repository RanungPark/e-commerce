import styled from 'styled-components';
import IconButton from './IconButton';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';
import { mixins } from '@styles/Mixin';

interface TextButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

const TextButton = ({
  onClick,
  children,
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  disabled = false,
}: TextButtonProps) => {
  return (
    <TextButtonWrapper onClick={onClick} disabled={disabled}>
      {hasLeftIcon ? (
        <IconButton IconComponent={CustomButton || ArrowLeft} />
      ) : (
        <></>
      )}
      {children}
      {hasRightIcon ? (
        <IconButton IconComponent={CustomButton || ArrowRight} />
      ) : (
        <></>
      )}
    </TextButtonWrapper>
  );
};

const TextButtonWrapper = styled.button`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Links}

  gap: 4px;
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
