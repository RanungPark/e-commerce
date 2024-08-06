import { createContext } from 'react';

interface CheckboxContextType {
  isChecked: (value: string) => boolean;
  toggleValue: ({
    checked,
    value,
  }: {
    checked: boolean;
    value: string;
  }) => void;
}

export const CheckboxContext = createContext<CheckboxContextType>({
  isChecked: () => false,
  toggleValue: () => {},
});
