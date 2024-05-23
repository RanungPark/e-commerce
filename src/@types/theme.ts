export type Color =
  | 'white'
  | 'extralight'
  | 'lightgray'
  | 'gray'
  | 'darkgray'
  | 'black'
  | 'success'
  | 'error';

export type Typography =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Heading4'
  | 'Heading5'
  | 'Heading6'
  | 'Subtitle'
  | 'Body'
  | 'Button'
  | 'Links'
  | 'Overline'
  | 'Caption'
  | 'CaptionSmall'
  | 'CaptionBold';

export type Weight = 'Semibold' | 'Medium' | 'Regular';

enum location {
  t = 'top',
  b = 'bottom',
  r = 'right',
  l = 'left',
}

enum boxModel {
  p = 'padding',
  b = 'border',
  m = 'margin',
}

type BorderStlye =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset';

type LocationKeys = keyof typeof location;
type BoxModelKeys = keyof typeof boxModel;

type BoxModeKey<
  V extends number,
  K1 extends BoxModelKeys = BoxModelKeys,
  K2 extends LocationKeys = LocationKeys,
> = `${K1}${K2}_${V}`;

type BoxModeValue<
  V extends number,
  M extends (typeof boxModel)[BoxModelKeys] = (typeof boxModel)[BoxModelKeys],
  L extends (typeof location)[LocationKeys] = (typeof location)[LocationKeys],
> = `${M}-${L}: ${V}px`;

type BuildTarget<N extends number> = (target: BoxModeKey<N>) => BoxModeValue<N>;

const createBuildTarget = <N extends number>(): BuildTarget<N> => {
  return (target: BoxModeKey<N>): BoxModeValue<N> => {
    const propertyKey = target[0] as BoxModelKeys;
    const sideKey = target[1] as LocationKeys;
    const value = parseInt(target.split('_')[1], 10) as N;

    const property = boxModel[propertyKey];
    const side = location[sideKey];

    const calculatedValue = property === 'border' ? value : ((value * 8) as N);

    return `${property}-${side}: ${calculatedValue}px`;
  };
};

export const buildTarget1 = createBuildTarget<1>();
console.log(buildTarget1('bt_1'));
console.log(buildTarget1('bb_1')); // 'border-bottom: 1px'
console.log(buildTarget1('ml_1')); // 'margin-left: 1rem'
console.log(buildTarget1('pt_1')); // 'padding-top: 1rem'

// const box: Record<BoxModeKey<1>, BoxModeValue<1>> = {
//   bb_1: 'border-bottom: 1px',
//   bl_1: 'border-left: 1px',
//   br_1: 'border-right: 1px',
//   bt_1: 'border-top: 1px',
//   mb_1: 'margin-bottom: 1rem',
//   ml_1: 'margin-left: 1rem',
//   mr_1: 'margin-right: 1rem',
//   mt_1: 'margin-top: 1rem',
//   pb_1: 'padding-bottom: 1rem',
//   pl_1: 'padding-left: 1rem',
//   pr_1: 'padding-right: 1rem',
//   pt_1: 'padding-top: 1rem',
// };

export type BoxModel<
  V extends number,
  K1 extends BoxModelKeys = BoxModelKeys,
  K2 extends LocationKeys = LocationKeys,
  M extends (typeof boxModel)[K1] = (typeof boxModel)[K1],
  L extends (typeof location)[K2] = (typeof location)[K2],
> = {
  [key in `${K1}${K2}_${V}`]: M extends 'border'
    ? `${M}-${L}: ${V}px`
    : `${M}-${L}: ${V}rem`;
};

const box: BoxModel<1> = {
  bb_1: 'border-bottom: 1px',
  bl_1: 'border-left: 1px',
  br_1: 'border-right: 1px',
  bt_1: 'border-top: 1px',
  mb_1: 'margin-bottom: 1rem',
  ml_1: 'margin-left: 1rem',
  mr_1: 'margin-right: 1rem',
  mt_1: 'margin-top: 1rem',
  pb_1: 'padding-bottom: 1rem',
  pl_1: 'padding-left: 1rem',
  pr_1: 'padding-right: 1rem',
  pt_1: 'padding-top: 1rem',
};
