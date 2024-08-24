import { useMemo } from 'react';
import styled from 'styled-components';

import { RadioButtonContext } from '@contexts/RadioButtonContext';
import { mixins } from '@styles/Mixin';

interface RadioButtonGroupProps {
  label: string;
  children: React.ReactNode;
  value: string;
  onChange: (values: string) => void;
}

const RadioButtonGroup = ({
  label,
  children,
  value,
  onChange,
}: RadioButtonGroupProps) => {
  const contextValue = useMemo(() => ({ value, onChange }), [value, onChange]);

  return (
    <RadioButtonGroupWrapper>
      <Legend>{label}</Legend>
      <RadioButtonContext.Provider value={contextValue}>
        {children}
      </RadioButtonContext.Provider>
    </RadioButtonGroupWrapper>
  );
};

const RadioButtonGroupWrapper = styled.fieldset`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 16px;
`;

const Legend = styled.legend`
  ${({ theme }) => theme.typography.Subtitle}
  margin-bottom: 16px;
`;

export default RadioButtonGroup;
