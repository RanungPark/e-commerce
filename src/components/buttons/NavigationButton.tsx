import styled, { css } from 'styled-components';

import { mixins } from '@styles/Mixin';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  hasIcon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
  testId?: string;
}

type NavigationButtonWrapperProps = Pick<NavigationButtonProps, 'hasIcon'>;

const NavigationButton = ({
  onClick,
  children,
  hasIcon = false,
  IconComponent,
  ariaLabel,
  testId,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper
      onClick={onClick}
      hasIcon={hasIcon}
      data-cy={testId}
    >
      {hasIcon && IconComponent && ariaLabel ? (
        <IconComponent aria-label={ariaLabel} />
      ) : (
        children
      )}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'hasIcon',
})<NavigationButtonWrapperProps>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Links};
  ${({ hasIcon }) =>
    hasIcon
      ? css`
          padding: 16px;
        `
      : css`
          padding: 32px 72px;
        `}
`;

export default NavigationButton;
