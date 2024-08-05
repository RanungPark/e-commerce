import { mixins } from '@styles/Mixin';
import { colors } from '@styles/theme';
import styled from 'styled-components';

interface SelectBoxOptionProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

const SelectBoxOption = ({ children, onClick }: SelectBoxOptionProps) => {
  return (
    <SelectBoxOptionWrapper
      onClick={onClick}
      data-value={children}
      className="bb-1 p-2"
      style={{ borderColor: colors.darkgray }}
    >
      {children}
    </SelectBoxOptionWrapper>
  );
};

const SelectBoxOptionWrapper = styled.li`
  ${mixins.flexBox({ justify: 'start' })}
  ${({ theme }) => theme.typography.CaptionBold}
  cursor: pointer;
  max-height: 56px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default SelectBoxOption;
