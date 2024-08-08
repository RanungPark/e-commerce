import { Link, To } from 'react-router-dom';
import styled from 'styled-components';

interface MenuButtonProps {
  to: To;
  onClick: (e: React.MouseEvent) => void;
  children: string;
}

const MenuButton = ({ to, onClick, children }: MenuButtonProps) => {
  return (
    <MenuButtonWrapper to={to} onClick={onClick} className="bb-1 p-3">
      {children}
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled(Link)`
  ${({ theme }) => theme.typography.Heading5}
  display: block;
`;

export default MenuButton;
