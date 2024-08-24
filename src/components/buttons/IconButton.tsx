import styled, { css } from 'styled-components';

import { mixins } from '@styles/Mixin';

type IconButtonSize = 'small' | 'medium' | 'large';

interface IconButtonProps {
  size?: IconButtonSize;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  testId?: string;
}

interface IconButtonWrapperProps {
  size: IconButtonSize;
}

const IconButton = ({
  size = 'small',
  IconComponent,
  ariaLabel,
  onClick,
  testId,
}: IconButtonProps) => {
  return (
    <IconButtonWrapper
      size={size}
      onClick={onClick}
      aria-label={ariaLabel}
      data-cy={testId}
    >
      <IconComponent />
    </IconButtonWrapper>
  );
};

const sizeStyles = {
  small: css`
    width: 24px;
    height: 24px;
  `,

  medium: css`
    width: 32px;
    height: 32px;
  `,

  large: css`
    width: 44px;
    height: 44px;
  `,
};

const IconButtonWrapper = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'size',
})<IconButtonWrapperProps>`
  ${mixins.flexBox({})}
  ${({ size }) => sizeStyles[size]}
`;

export default IconButton;
