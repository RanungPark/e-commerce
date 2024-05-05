import { mixins } from 'src/styles/Mixin';
import styled from 'styled-components';
import Text from '../Text';

const StyledOption = styled.li`
  ${mixins.flexBox(undefined, undefined, 'start')}
  width: 100%;
  max-height: 56px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.darkgray};
  border-bottom: none;

  &:last-of-type {
    border: 1px solid ${({ theme }) => theme.colors.darkgray};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.white};
  }
`;

interface OptionProps {
  value: string;
  onClick: React.MouseEventHandler<HTMLLIElement>;
}

const Option = ({
  value,
  onClick,
  children,
}: React.PropsWithChildren<OptionProps>) => {
  return (
    <StyledOption onClick={onClick} value={value}>
      <Text as="p" typography="CaptionBold">
        {children}
      </Text>
    </StyledOption>
  );
};

export default Option;
