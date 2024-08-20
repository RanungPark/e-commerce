import { mixins } from '@styles/Mixin';
import styled, { css } from 'styled-components';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  hasIcon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
}

type NavigationButtonWrapperProps = Pick<NavigationButtonProps, 'hasIcon'>;

const NavigationButton = ({
  onClick,
  children,
  hasIcon = false,
  IconComponent,
  ariaLabel,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper onClick={onClick} hasIcon={hasIcon}>
      {hasIcon && IconComponent && ariaLabel ? (
        <IconComponent aria-label={ariaLabel} />
      ) : (
        children
      )}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasIcon',
})<NavigationButtonWrapperProps>`
  ${mixins.flexBox({})};
  ${({ hasIcon }) =>
    hasIcon
      ? css`
          padding: 16px;
        `
      : css`
          padding: 32px 72px;
        `}
  ${({ theme }) => theme.typography.Links};
`;

export default NavigationButton;
