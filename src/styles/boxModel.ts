import { colors } from './theme';

const location = {
  t: 'top',
  b: 'bottom',
  r: 'right',
  l: 'left',
};

const models = {
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

type Units =
  | 'px'
  | 'pt'
  | 'pc'
  | 'in'
  | 'cm'
  | 'mm'
  | 'em'
  | 'rem'
  | '%'
  | 'vh'
  | 'vw'
  | 'vmin'
  | 'vmax'
  | 'ch'
  | 'ex'
  | 'cap'
  | 'ic'
  | 'lh'
  | 'rlh';

type LocationKeys = keyof typeof location;
type ModelKeys = keyof typeof models;
type LineStyleKeys = keyof typeof lineStyle;
type LineColorKeys = keyof typeof colors;

const isLocationKeys = (key: string | null): key is LocationKeys => {
  if (key === null) return false;
  return key in location;
};

const isModelKeys = (key: string): key is ModelKeys => {
  return key in models;
};

const isLineStyleKey = (key: string): key is LineStyleKeys => {
  return key in lineStyle;
};

const isLineColorKey = (key: string): key is LineColorKeys => {
  return key in colors;
};

const isUnits = <T extends string>(key: T): key is T & Units => {
  return true;
};

interface NumberAndUnit<N> {
  number: N;
  unit: Units;
}

const extractNumbersAndUnits = <N>(input: string): NumberAndUnit<N> => {
  const regex = /(\d+)([a-zA-Z%]+)/g;
  let matches: RegExpExecArray | null;
  let result: NumberAndUnit<N>;

  if ((matches = regex.exec(input)) !== null) {
    if (isUnits(matches[2])) {
      result = {
        number: matches[1] as N,
        unit: matches[2],
      };
    } else {
      throw new Error('unit을 찾을 수 없습니다');
    }
  } else {
    throw new Error('match할 수 없습니다');
  }

  return result;
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
  K2 extends LocationKeys | undefined = LocationKeys | undefined,
  U extends Units = Units,
> = K2 extends undefined
  ? K1 extends 'b'
    ? never
    : `${K1}_${V}${U}`
  : `${K1}${K2}_${V}${U}`;

type BoxModeValue<
  V extends number,
  M extends (typeof models)[ModelKeys] = (typeof models)[ModelKeys],
  L extends (typeof location)[LocationKeys] | undefined =
    | (typeof location)[LocationKeys]
    | undefined,
  U extends Units = Units,
> = L extends undefined
  ? M extends 'border'
    ? never
    : `${M}: ${V}${U}`
  : M extends 'border'
    ? `${M}-${L}-width: ${V}${U}`
    : `${M}-${L}: ${V}${U}`;

export const boxModel = <N extends number>(
  targets: BoxModeKey<N>[]
): BoxModeValue<N>[] => {
  const results: BoxModeValue<N>[] = [];

  targets.forEach(target => {
    const propertyKey = target[0];
    const sideKey = target[1] === '_' ? null : target[1];

    const { number, unit } = extractNumbersAndUnits<N>(target.split('_')[1]);

    if (!isModelKeys(propertyKey)) {
      throw new Error(`${target}에 박스모델이 존재하지 않습니다`);
    }

    if (isLocationKeys(sideKey)) {
      const model = models[propertyKey];
      const side = location[sideKey];

      const result: BoxModeValue<N> =
        model === 'border'
          ? `${model}-${side}-width: ${number}${unit}`
          : `${model}-${side}: ${number}${unit}`;

      results.push(result);
    } else {
      const model = models[propertyKey];

      if (model !== 'border') {
        const result: BoxModeValue<N> = `${model}: ${number}${unit}`;
        results.push(result);
      }
    }
  });

  return results;
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

type BuildBorderStlye = (targets: BorderStyleKey[]) => BorderStyleValue[];

export const borderStyle: BuildBorderStlye = targets => {
  const results: BorderStyleValue[] = [];

  targets.forEach(target => {
    const sideKey = target[1];
    const styleKey = target.split('_')[1];

    if (!isLocationKeys(sideKey)) {
      throw new Error(`${target}에 위치가 존재하지 않습니다`);
    }

    if (!isLineStyleKey(styleKey)) {
      throw new Error(`${target}에 style이 존재하지 않습니다`);
    }

    const side = location[sideKey];
    const style = lineStyle[styleKey];

    results.push(`border-${side}-style: ${style}`);
  });

  return results;
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

type BuildBorderColor = (target: BorderColorKey[]) => BorderColorValue[];

export const borderColor: BuildBorderColor = targets => {
  const results: BorderColorValue[] = [];

  targets.forEach(target => {
    const sideKey = target[1];
    const colorKey = target.split('_')[1];

    if (!isLocationKeys(sideKey)) {
      throw new Error(`${target}에 위치가 존재하지 않습니다`);
    }

    if (!isLineColorKey(colorKey)) {
      throw new Error(`${target}에 color가 존재하지 않습니다`);
    }

    const side = location[sideKey];
    const color = colors[colorKey];

    results.push(`border-${side}-color: ${color}`);
  });

  return results;
};

/**
 * border 전용 함수
 * 사용법 export const border_1 = border<1>('b_1_das_extralight'); 이처럼 제네릭으로 숫자를 미리 정의시
 * 매개변수에 자동완성으로 1px로 이루어진 border속성들만 나타나개된다
 */

type BorderLocationArgsKey<
  V extends number,
  K2 extends LocationKeys = LocationKeys,
  S extends LineStyleKeys = LineStyleKeys,
  C extends LineColorKeys = LineColorKeys,
  U extends Units = Units,
> = `b${K2}_${V}${U}_${S}_${C}`;

type BorderLocationArgsValue<
  V extends number,
  L extends (typeof location)[LocationKeys] = (typeof location)[LocationKeys],
  S extends
    (typeof lineStyle)[LineStyleKeys] = (typeof lineStyle)[LineStyleKeys],
  C extends (typeof colors)[LineColorKeys] = (typeof colors)[LineColorKeys],
  U extends Units = Units,
> = `border-${L}: ${V}${U} ${S} ${C}`;

export const borderLocationArgs = <N extends number>(
  targets: BorderLocationArgsKey<N>[]
): BorderLocationArgsValue<N>[] => {
  const results: BorderLocationArgsValue<N>[] = [];

  targets.forEach(target => {
    const parts = target.split('_');

    const sideKey = target[1];
    const { number, unit } = extractNumbersAndUnits<N>(parts[1]);
    const stlyeKey = parts[2];
    const colorKey = parts[3];

    if (!isLocationKeys(sideKey)) {
      throw new Error(`${target}에 위치가 존재하지 않습니다`);
    }

    if (!isLineStyleKey(stlyeKey)) {
      throw new Error(`${target}에 style이 존재하지 않습니다`);
    }

    if (!isLineColorKey(colorKey)) {
      throw new Error(`${target}에 color가 존재하지 않습니다`);
    }

    const side = location[sideKey];
    const style = lineStyle[stlyeKey];
    const color = colors[colorKey];

    results.push(`border-${side}: ${number}${unit} ${style} ${color}`);
  });

  return results;
};

type BorderAllArgsKey<
  V extends number,
  S extends LineStyleKeys = LineStyleKeys,
  C extends LineColorKeys = LineColorKeys,
  U extends Units = Units,
> = `b_${V}${U}_${S}_${C}`;

type BorderAllArgsValue<
  V extends number,
  S extends
    (typeof lineStyle)[LineStyleKeys] = (typeof lineStyle)[LineStyleKeys],
  C extends (typeof colors)[LineColorKeys] = (typeof colors)[LineColorKeys],
  U extends Units = Units,
> = `border: ${V}${U} ${S} ${C}`;

export const borderAllArgs = <N extends number>(
  target: BorderAllArgsKey<N>
): BorderAllArgsValue<N> => {
  const parts = target.split('_');

  const { number, unit } = extractNumbersAndUnits<N>(parts[1]);
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

  return `border: ${number}${unit} ${style} ${color}`;
};
