import styled from 'styled-components';
import { mixins } from '@styles/Mixin';
import Text from '../../Text';

interface MenuProps {
  label: string;
}

const Menu = ({ label }: MenuProps) => {
  return (
    <StyledMenu href="/" className='br-1'>
      <Text as="p" typography="Links">
        {label}
      </Text>
    </StyledMenu>
  );
};

const StyledMenu = styled.a`
  ${mixins.flexBox({ display: 'inline-flex' })};
  width: 180px;
  height: auto;
  padding: 24px 36px;
`;

export default Menu;
