import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

interface DropDownOptionProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

const DropDownOption = ({ children, onClick }: DropDownOptionProps) => {
  return (
    <DropDownOptionWrapper onClick={onClick} data-value={children}>
      {children}
    </DropDownOptionWrapper>
  );
};

const DropDownOptionWrapper = styled.li`
  ${mixins.flexBox({ justify: 'start' })}
  ${({ theme }) => theme.typography.CaptionBold}
  cursor: pointer;
  max-height: 56px;
  padding: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export default DropDownOption;
