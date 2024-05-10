import { Color, Typography } from 'src/@types/theme';
import { PartialRequired } from 'src/@types/utils';
import styled from 'styled-components';

/**
 *
 *
 * @example
 * ```tsx
 * function Foo(){
 *   return <Text as="span" typography="heading1" color="primary" align="left"> Text Component <Text/>
 * }
 * ```
 */

interface TextProps {
  as: keyof JSX.IntrinsicElements;
  typography: Typography;
  align: 'left' | 'right' | 'center';
  color: Color;
  width: string;
  height: string;
}

type TextPropsPartialRequired = PartialRequired<TextProps, 'as' | 'typography'>;

const Text = ({
  as,
  typography,
  align,
  color,
  height,
  width,
  children,
}: React.PropsWithChildren<TextPropsPartialRequired>) => {
  return (
    <StyledText
      as={as}
      typography={typography}
      align={align}
      color={color}
      width={width}
      height={height}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.div<TextPropsPartialRequired>`
  ${({ theme, typography }) => theme.typography[typography]};
  color: ${({ theme, color }) =>
    color !== undefined ? theme.colors[color] : 'inherit'};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Text;
