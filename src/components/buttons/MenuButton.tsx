import { Link, To } from 'react-router-dom';
import styled from 'styled-components';

interface MenuButtonProps {
  to: To;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string;
  testId?: string;
}

const MenuButton = ({ to, onClick, children, testId }: MenuButtonProps) => {
  return (
    <MenuButtonWrapper to={to} onClick={onClick} data-cy={testId}>
      {children}
    </MenuButtonWrapper>
  );
};

const MenuButtonWrapper = styled(Link)`
  ${({ theme }) => theme.typography.Heading5}
  display: block;

  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

export default MenuButton;
