import { mixins } from '@styles/Mixin';
import styled, { css } from 'styled-components';
import IconButton from './IconButton';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: string;
  hasIcon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

type NavigationButtonWrapperProps = Pick<NavigationButtonProps, 'hasIcon'>;

const NavigationButton = ({
  onClick,
  children,
  hasIcon = false,
  IconComponent,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper onClick={onClick} hasIcon={hasIcon}>
      {hasIcon && IconComponent ? (
        <IconButton IconComponent={IconComponent} />
      ) : (
        children
      )}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button<NavigationButtonWrapperProps>`
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
