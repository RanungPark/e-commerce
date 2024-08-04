import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import IconButton from './IconButton';

interface NavigationButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children?: string;
  hasIcon?: boolean;
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavigationButton = ({
  onClick,
  children,
  hasIcon = false,
  IconComponent,
}: NavigationButtonProps) => {
  return (
    <NavigationButtonWrapper
      onClick={onClick}
      className={`br-1 ${hasIcon ? 'p-2' : 'pt-4 pb-4 pr-9 pl-9'}`}
    >
      {hasIcon && IconComponent ? (
        <IconButton IconComponent={IconComponent} />
      ) : (
        children
      )}
    </NavigationButtonWrapper>
  );
};

const NavigationButtonWrapper = styled.button`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Links}
`;

export default NavigationButton;
