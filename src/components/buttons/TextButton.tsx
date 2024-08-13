import styled from 'styled-components';
import IconButton from './IconButton';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';
import { mixins } from '@styles/Mixin';

interface TextButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
  const renderIcon = (position: 'left' | 'right') => {
    if (position === 'left' && hasLeftIcon) {
      return <IconButton IconComponent={CustomButton || ArrowLeft} />;
    }
    if (position === 'right' && hasRightIcon) {
      return <IconButton IconComponent={CustomButton || ArrowRight} />;
    }
    return null;
  };

  return (
    <TextButtonWrapper onClick={onClick} disabled={disabled}>
      {renderIcon('left')}
      {children}
      {renderIcon('right')}
    </TextButtonWrapper>
  );
};

const TextButtonWrapper = styled.button`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Links}

  gap: 4px;
  background-color: inherit;
  position: relative;
  cursor: pointer;

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
