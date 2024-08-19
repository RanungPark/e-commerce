import { mixins } from '@styles/Mixin';
import styled, { css } from 'styled-components';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  hasicon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  ariaLabel?: string;
}

type NavigationButtonWrapperProps = Pick<NavigationButtonProps, 'hasicon'>;

const NavigationButton = ({
  onClick,
  children,
  hasicon = false,
  IconComponent,
  ariaLabel,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper onClick={onClick} hasicon={hasicon}>
      {hasicon && IconComponent && ariaLabel ? (
        <IconComponent aria-label={ariaLabel} />
      ) : (
        children
      )}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button<NavigationButtonWrapperProps>`
  ${mixins.flexBox({})};
  ${({ hasicon }) =>
    hasicon
      ? css`
          padding: 16px;
        `
      : css`
          padding: 32px 72px;
        `}
  ${({ theme }) => theme.typography.Links};
`;

export default NavigationButton;
