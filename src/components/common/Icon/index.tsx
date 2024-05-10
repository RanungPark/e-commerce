import styled from 'styled-components';
import { Color } from 'src/@types/theme';
import { PartialRequired } from 'src/@types/utils';

/**
 *
 *
 * @example
 * ```tsx
 *  function Foo() {
 *   return <Icon as={IconComponent} fill='gray' />
 * }
 * ```
 *
 */

interface IconProps {
  as: React.FC<React.SVGProps<SVGSVGElement>>;
  fill: Color;
}

type IconPropsPartialRequired = PartialRequired<IconProps, 'as'>;

const Icon = ({ as, fill }: IconPropsPartialRequired) => {
  return <StyledIcon as={as} fill={fill}></StyledIcon>;
};

const StyledIcon = styled.div<IconPropsPartialRequired>`
  & path {
    fill: ${({ theme, fill }) => theme.colors[fill!]};
  }
`;

export default Icon;
