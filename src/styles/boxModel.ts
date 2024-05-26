import { colors } from './theme';

const location = {
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
};

const model = {
  p: 'padding',
  b: 'border',
  m: 'margin',
};

const lineStyle = {
  non: 'none',
  hid: 'hidden',
  dot: 'dotted',
  das: 'dashed',
  sol: 'solid',
  dou: 'double',
  gro: 'groove',
  rid: 'ridge',
  ins: 'inset',
  out: 'outset',
};

type LocationKeys = keyof typeof location;
type ModelKeys = keyof typeof model;
type LineStyleKeys = keyof typeof lineStyle;
type LineColorKeys = keyof typeof colors;

const isLocationKeys = (key: string): key is LocationKeys => {
  return key in location;
};

const isModelKeys = (key: string): key is ModelKeys => {
  return key in model;
};

const isLineStyleKey = (key: string): key is LineStyleKeys => {
  return key in lineStyle;
};

const isLineColorKey = (key: string): key is LineColorKeys => {
  return key in colors;
};

/**
 * 박스모델 전용 함수
 * 사용법 export const boxModel_1 = boxModel<1>('bb_1'); 이처럼 제네릭으로 숫자를 미리 정의시
 * 매개변수에 자동완성으로 1px로 이루어진 박스모델키값이 나온다
 * 반환값으로 border에경우 `border-bottom-width : 1px`이 나오며
 * 그외에 margin, padding은 8px의 배수로 이루어진 값이 나온다
 */

type BoxModeKey<
  V extends number,
  K1 extends ModelKeys = ModelKeys,
  K2 extends LocationKeys = LocationKeys,
> = `${K1}${K2}_${V}`;

type BoxModeValue<
  V extends number,
  M extends (typeof model)[ModelKeys] = (typeof model)[ModelKeys],
  L extends (typeof location)[LocationKeys] = (typeof location)[LocationKeys],
> = M extends 'border' ? `${M}-${L}-width: ${V}px` : `${M}-${L}: ${V}px`;

export const boxModel = <N extends number>(
  target: BoxModeKey<N>
): BoxModeValue<N> => {
  const propertyKey = target[0];
  const sideKey = target[1];
  const value = parseInt(target.split('_')[1], 10) as N;

  if (!isModelKeys(propertyKey)) {
    throw new Error(`${target}에 박스모델이 존재하지 않습니다`);
  }

  if (!isLocationKeys(sideKey)) {
    throw new Error(`${target}에 위치가 존재하지 않습니다`);
  }

  const property = model[propertyKey];
  const side = location[sideKey];

  const calculatedValue = property === 'border' ? value : ((value * 8) as N);

  return property === 'border'
    ? `${property}-${side}-width: ${calculatedValue}px`
    : `${property}-${side}: ${calculatedValue}px`;
};

/**
 * border-`location`-style 전용 함수
 * 사용법 borderStyle(bl_sol); 매개변수에 자동완성으로 `b${location}_${border-style}`이 나타나며
 * 반환값으로 위의 예시에서  `border-lift-style: solid`가 나온다
 */

type BorderStyleKey<
  S extends LineStyleKeys = LineStyleKeys,
  K2 extends LocationKeys = LocationKeys,
> = `b${K2}_${S}`;

type BorderStyleValue<
  S extends
    (typeof lineStyle)[LineStyleKeys] = (typeof lineStyle)[LineStyleKeys],
  L extends (typeof location)[LocationKeys] = (typeof location)[LocationKeys],
> = `border-${L}-style: ${S}`;

type BuildBorderStlye = (target: BorderStyleKey) => BorderStyleValue;

export const borderStyle: BuildBorderStlye = target => {
  const sideKey = target[1];
  const valuekey = target.split('_')[1];

  if (!isLocationKeys(sideKey)) {
    throw new Error(`${target}에 위치가 존재하지 않습니다`);
  }

  if (!isLineStyleKey(valuekey)) {
    throw new Error(`${target}에 style이 존재하지 않습니다`);
  }

  const side = location[sideKey];
  const value = lineStyle[valuekey];

  return `border-${side}-style: ${value}`;
};

/**
 * border-`location`-color 전용 함수
 * 사용법 borderStyle(bl_white); 매개변수에 자동완성으로 `b${location}_${color}`가 나타나며
 * color는 공통 컬러이다
 * 반환값으로 위의 예시에서  `border-lift-color: #ffffff`가 나온다
 */

type BorderColorKey<
  C extends LineColorKeys = LineColorKeys,
  K2 extends LocationKeys = LocationKeys,
> = `b${K2}_${C}`;

type BorderColorValue<
  C extends (typeof colors)[LineColorKeys] = (typeof colors)[LineColorKeys],
  L extends (typeof location)[LocationKeys] = (typeof location)[LocationKeys],
> = `border-${L}-color: ${C}`;

type BuildBorderColor = (target: BorderColorKey) => BorderColorValue;

export const borderColor: BuildBorderColor = target => {
  const sideKey = target[1];
  const valuekey = target.split('_')[1];

  if (!isLocationKeys(sideKey)) {
    throw new Error(`${target}에 위치가 존재하지 않습니다`);
  }

  if (!isLineColorKey(valuekey)) {
    throw new Error(`${target}에 color가 존재하지 않습니다`);
  }

  const side = location[sideKey];
  const value = colors[valuekey];

  return `border-${side}-color: ${value}`;
};

/**
 * border 전용 함수
 * 사용법 export const border_1 = border<1>('b_1_das_extralight'); 이처럼 제네릭으로 숫자를 미리 정의시
 * 매개변수에 자동완성으로 1px로 이루어진 border속성들만 나타나개된다
 */

type BorderFullKey<
  V extends number,
  S extends LineStyleKeys = LineStyleKeys,
  C extends LineColorKeys = LineColorKeys,
> = `b_${V}_${S}_${C}`;

type BorderFullValue<
  V extends number,
  S extends
    (typeof lineStyle)[LineStyleKeys] = (typeof lineStyle)[LineStyleKeys],
  C extends (typeof colors)[LineColorKeys] = (typeof colors)[LineColorKeys],
> = `border: ${V}px ${S} ${C}`;

export const borderFull = <N extends number>(
  target: BorderFullKey<N>
): BorderFullValue<N> => {
  const parts = target.split('_');

  const value = parseInt(parts[1], 10) as N;
  const stlyeKey = parts[2];
  const colorKey = parts[3];

  if (!isLineStyleKey(stlyeKey)) {
    throw new Error(`${target}에 style이 존재하지 않습니다`);
  }

  if (!isLineColorKey(colorKey)) {
    throw new Error(`${target}에 color가 존재하지 않습니다`);
  }

  const style = lineStyle[stlyeKey];
  const color = colors[colorKey];

  return `border: ${value}px ${style} ${color}`;
};

console.log(borderFull<1>('b_1_das_darkgray'));
