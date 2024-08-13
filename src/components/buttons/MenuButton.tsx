import { Link, To } from 'react-router-dom';
import styled from 'styled-components';

interface MenuButtonProps {
  to: To;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string;
}

const MenuButton = ({ to, onClick, children }: MenuButtonProps) => {
  return (
    <MenuButtonWrapper to={to} onClick={onClick}>
      {children}
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled(Link)`
  ${({ theme }) => theme.typography.Heading5}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px;
  display: block;
`;

export default MenuButton;
