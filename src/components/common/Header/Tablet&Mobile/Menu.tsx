import styled from 'styled-components';
import { mixins } from 'src/styles/Mixin';
import Icon from '../../Icon';
import { PartialOptional } from 'src/@types/utils';

const StyledMenu = styled.a`
  ${mixins.flexBox({})};
  width: auto;
  height: auto;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  padding: 16px;
`;

interface MenuProps {
  as: 'button' | 'a';
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  href: string;
}

type OptionalFromMenuProps = PartialOptional<MenuProps, 'href'>;

const Menu = ({ as, icon, href = '/' }: OptionalFromMenuProps) => {
  return (
    <StyledMenu href={href} as={as}>
      <Icon as={icon} />
    </StyledMenu>
  );
};

export default Menu;
