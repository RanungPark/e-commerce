import { mixins } from '@styles/Mixin';
import { colors } from '@styles/theme';
import styled from 'styled-components';

interface DropDownOptionProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

const DropDownOption = ({ children, onClick }: DropDownOptionProps) => {
  return (
    <DropDownOptionWrapper
      onClick={onClick}
      data-value={children}
      className="p-2"
      style={{ borderColor: colors.darkgray }}
    >
      {children}
    </DropDownOptionWrapper>
  );
};

const DropDownOptionWrapper = styled.li`
  ${mixins.flexBox({ justify: 'start' })}
  ${({ theme }) => theme.typography.CaptionBold}
  cursor: pointer;
  max-height: 56px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default DropDownOption;
