type CommonProps = {
  label: string;
  productImg: string;
  price: string;
  isDisabled?: boolean;
  arrowIcon?: 'none' | 'left' | 'right';
};

export type PickCommonProps<K extends keyof CommonProps> = Pick<CommonProps, K>;

export type OmitCommonProps<K extends keyof CommonProps> = Omit<CommonProps, K>;

export type PickLabel = Pick<CommonProps, 'label'>;
