import styled from 'styled-components';
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
  ariaLabel?: string;
}

const TextButton = ({
  onClick,
  children,
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  disabled = false,
  ariaLabel,
}: TextButtonProps) => {
  const renderIcon = (position: 'left' | 'right') => {
    if (position === 'left') {
      if (hasLeftIcon) {
        if (CustomButton && ariaLabel) {
          return <CustomButton aria-label={ariaLabel} />;
        } else {
          return <ArrowLeft aria-label="left arrow" />;
        }
      }
    } else if (position === 'right') {
      if (hasRightIcon) {
        if (CustomButton && ariaLabel) {
          return <CustomButton aria-label={ariaLabel} />;
        } else {
          return <ArrowRight aria-label="right arrow" />;
        }
      }
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
    pointer-events: none;
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
