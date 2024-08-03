import styled, { css } from 'styled-components';
import IconButton from './IconButton';
import { ReactComponent as ArrowLeft } from '@assets/icons/wght300/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '@assets/icons/wght300/ArrowRight.svg';
import { mixins } from '@styles/Mixin';

type PrimaryButtonTheme = 'primary' | 'secondary' | 'tertiary';

interface PrimaryButtonProps {
  primaryButtontheme?: PrimaryButtonTheme;
  onClick: (e: React.MouseEvent) => void;
  children: string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  CustomButton?: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
}

type PrimaryButtonWrapperProps = Pick<PrimaryButtonProps, 'primaryButtontheme'>;

const PrimaryButton = ({
  onClick,
  children,
  primaryButtontheme = 'primary',
  hasLeftIcon = false,
  hasRightIcon = false,
  CustomButton,
  disabled = false,
}: PrimaryButtonProps) => {
  return (
    <PrimaryButtonWrapper
      primaryButtontheme={primaryButtontheme}
      onClick={onClick}
      disabled={disabled}
      className="pt-2 pb-2 pr-3 pl-3"
    >
      {!hasLeftIcon ? (
        <></>
      ) : !CustomButton ? (
        <IconButton IconComponent={ArrowLeft} />
      ) : (
        <IconButton IconComponent={CustomButton} />
      )}
      {children}
      {!hasRightIcon ? (
        <></>
      ) : !CustomButton ? (
        <IconButton IconComponent={ArrowRight} />
      ) : (
        <IconButton IconComponent={CustomButton} />
      )}
    </PrimaryButtonWrapper>
  );
};
const primaryStyle = css`
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
`;

const secondaryStyle = css`
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
`;

const tertiaryStyle = css`
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
`;

const PrimaryButtonWrapper = styled.button<PrimaryButtonWrapperProps>`
  ${({ primaryButtontheme }) =>
    primaryButtontheme === 'primary' ? primaryStyle : null}
  ${({ primaryButtontheme }) =>
    primaryButtontheme === 'secondary' ? secondaryStyle : null}
  ${({ primaryButtontheme }) =>
    primaryButtontheme === 'tertiary' ? tertiaryStyle : null}

  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Button}

  gap:8px;
  width: 100%;
  height: 56px;
  cursor: pointer;
  text-transform: uppercase;

  &:disabled {
    cursor: not-allowed;
  }
`;

export default PrimaryButton;
