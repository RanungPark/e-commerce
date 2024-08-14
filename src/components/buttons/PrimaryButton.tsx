import styled, { css } from 'styled-components';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';
import { mixins } from '@styles/Mixin';

type PrimaryButtonTheme = 'primary' | 'secondary' | 'tertiary';

interface PrimaryButtonProps {
  primaryButtontheme?: PrimaryButtonTheme;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  ariaLabel?: string;
}

const PrimaryButton = ({
  onClick,
  children,
  primaryButtontheme = 'primary',
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  disabled = false,
  ariaLabel,
}: PrimaryButtonProps) => {
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
    <PrimaryButtonWrapper
      primaryButtontheme={primaryButtontheme}
      onClick={onClick}
      disabled={disabled}
    >
      {renderIcon('left')}
      {children}
      {renderIcon('right')}
    </PrimaryButtonWrapper>
  );
};

const buttonStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    & path {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkgray};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.black};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.lightgray};
      color: ${({ theme }) => theme.colors.gray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.black};

    & path {
      fill: ${({ theme }) => theme.colors.black};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};

      & path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 1px solid ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray};
      border: 1px solid ${({ theme }) => theme.colors.gray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,
  tertiary: css`
    background-color: inherit;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.white};

    & path {
      fill: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};

      & path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }

    &:disabled {
      background-color: inherit;
      color: ${({ theme }) => theme.colors.gray};
      border: 1px solid ${({ theme }) => theme.colors.lightgray};

      & path {
        fill: ${({ theme }) => theme.colors.gray};
      }
    }
  `,
};

const PrimaryButtonWrapper = styled.button<{
  primaryButtontheme: PrimaryButtonTheme;
}>`
  ${({ primaryButtontheme }) =>
    buttonStyles[primaryButtontheme] || buttonStyles.primary}
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Button}
  
  padding:16px 24px;
  gap: 8px;
  width: 100%;
  height: 56px;
  cursor: pointer;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default PrimaryButton;
