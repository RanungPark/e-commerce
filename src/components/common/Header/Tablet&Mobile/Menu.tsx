import styled from 'styled-components';
import { mixins } from '@styles/Mixin';
import Icon from '../../Icon';
import { PartialOptional } from 'src/@types/utils';

interface MenuProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

type OptionalFromMenuProps = PartialOptional<MenuProps, 'handleClick'>;

const Menu = ({ icon, handleClick }: OptionalFromMenuProps) => {
  return (
    <StyledMenu onClick={handleClick}>
      <Icon as={icon} />
    </StyledMenu>
  );
};

const StyledMenu = styled.button`
  ${mixins.flexBox({})};
  ${mixins.border({ width: 'right' })}
  width: auto;
  height: auto;
  padding: 16px;
`;

export default Menu;
