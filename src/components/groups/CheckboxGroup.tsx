import { CheckboxContext } from '@contexts/CheckboxContext';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface CheckboxGroupProps {
  label: string;
  children: React.ReactNode;
  values: string[];
  onChange: (values: string[]) => void;
}

const CheckboxGroup = ({
  label,
  children,
  values,
  onChange,
}: CheckboxGroupProps) => {
  const isChecked = (value: string) => values.includes(value);

  const toggleValue = ({
    checked,
    value,
  }: {
    checked: boolean;
    value: string;
  }) => {
    if (checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter(v => v !== value));
    }
  };

  return (
    <CheckboxGroupWrapper>
      <Legend>{label}</Legend>
      <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </CheckboxGroupWrapper>
  );
};

const CheckboxGroupWrapper = styled.fieldset`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.Subtitle}
  margin-bottom: 16px;
`;

export default CheckboxGroup;
