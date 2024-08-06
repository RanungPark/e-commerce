import { createContext } from 'react';

interface RadioButtonContextType {
  value: string;
  onChange: (values: string) => void;
}

export const RadioButtonContext = createContext<RadioButtonContextType>({
  value: '',
  onChange: () => {},
});
