import styled, { css } from 'styled-components';

type IconButtonSize = 'small' | 'medium' | 'large';

interface IconButtonProps {
  size?: IconButtonSize;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  onClick?: (e: React.MouseEvent) => void;
}

interface IconButtonWrapperProps {
  size: IconButtonSize;
}

const IconButton = ({
  size = 'small',
  IconComponent,
  onClick,
}: IconButtonProps) => {
  return (
    <IconButtonWrapper size={size} onClick={onClick}>
      <IconComponent />
    </IconButtonWrapper>
  );
};

const smallStyle = css`
  width: 24px;
  height: 24px;
`;

const mediumStyle = css`
  width: 32px;
  height: 32px;
`;

const largeStyle = css`
  width: 44px;
  height: 44px;
`;

const IconButtonWrapper = styled.button<IconButtonWrapperProps>`
  ${({ size }) => (size === 'small' ? smallStyle : null)}
  ${({ size }) => (size === 'medium' ? mediumStyle : null)}
  ${({ size }) => (size === 'large' ? largeStyle : null)}
`;

export default IconButton;
