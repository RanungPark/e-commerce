export type PartialRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type PartialOptional<T, K extends keyof T> = Partial<T> & Omit<T, K>;

export type PartialDelete<T, K extends keyof T> = T | Omit<T, K>;

type DeleteTuple<
  T extends any[],
  K extends any[],
  R extends any[] = [],
> = T extends [infer V, ...infer A]
  ? V extends K[number]
    ? DeleteTuple<A, K>
    : [V, ...DeleteTuple<A, K>]
  : [];

type ObjectPath<
  T,
  R extends string = '',
  K extends keyof T = keyof T,
> = K extends string | number
  ? T[K] extends string | number
    ? `${R}${K}`
    : T[K] extends object
      ? ObjectPath<T[K], `${R}${K}.`>
      : never
  : never;

  type A<T> = T extends string ? any : never