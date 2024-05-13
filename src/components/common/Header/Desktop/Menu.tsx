import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Text from '../../Text';

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

const StyledMenu = styled.a`
  ${mixins.flexBox({ display: 'inline-flex' })};
  ${mixins.border({ width: 'right' })}
  width: 180px;
  height: auto;
  padding: 24px 36px;
`;

export default Menu;
