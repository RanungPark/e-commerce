import styled, { css } from 'styled-components';

type IconButtonSize = 'medium' | 'large';

interface IconButtonProps {
  size?: IconButtonSize;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: (e: React.MouseEvent) => void;
}

interface IconButtonWrapperProps {
  size: IconButtonSize;
}

const IconButton = ({
  size = 'medium',
  IconComponent,
  onClick,
}: IconButtonProps) => {
  return (
    <IconButtonWrapper size={size} onClick={onClick}>
      <IconComponent />
    </IconButtonWrapper>
  );
};

const mediumStyle = css`
  width: 24px;
  height: 24px;
`;

const largeStyle = css`
  width: 44px;
  height: 44px;
`;

const IconButtonWrapper = styled.button<IconButtonWrapperProps>`
  ${({ size }) => (size === 'medium' ? mediumStyle : largeStyle)}
`;

export default IconButton;
