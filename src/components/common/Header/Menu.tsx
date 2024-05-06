import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Text from '../Text';

const StyledMenu = styled.a`
  ${mixins.flexBox({ display: 'inline-flex' })};
  width: 180px;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 36px;
`;

interface MenuProps {
  label: string;
}

const Menu = ({ label }: MenuProps) => {
  return (
    <StyledMenu href="/">
      <Text as="p" typography="Links">
        {label}
      </Text>
    </StyledMenu>
  );
};

export default Menu;
