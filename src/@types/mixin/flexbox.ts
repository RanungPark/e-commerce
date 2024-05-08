type DisplayPropertyValue =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex';
type FlexDirectionPropertyValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';
type JustifyContentPropertyValue =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItemsPropertyValue =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end';

interface FlexBoxProps {
  display: DisplayPropertyValue;
  direction: FlexDirectionPropertyValue;
  justify: JustifyContentPropertyValue;
  align: AlignItemsPropertyValue;
}

export type OptionalFromFlexBoxProps = Partial<FlexBoxProps>;
