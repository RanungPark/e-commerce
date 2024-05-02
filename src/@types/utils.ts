export type PartialRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type PartialOptional<T, K extends keyof T> = Partial<T> & Omit<T, K>;

