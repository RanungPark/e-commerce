import { Color } from '../theme';
import { PartialOptional } from '../utils';

type nodeToColorType = 'colorAndFill' | 'bgColor' | 'borderColor';

type nodeToColorProps = Record<nodeToColorType, Color>;

export type OptionalButtonProps = PartialOptional<
  nodeToColorProps,
  'bgColor' | 'borderColor'
>;

export type PickInputProps = Pick<
  nodeToColorProps,
  'colorAndFill' | 'borderColor'
>;
