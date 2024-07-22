import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import Text from '../Text';
import { SelectBoxProps } from '.';

type OptionProps = Pick<SelectBoxProps, 'handleClickOfLi'> & {
  option: string;
};

const Option = ({
  option,
  handleClickOfLi,
  children,
}: React.PropsWithChildren<OptionProps>) => {
  return (
    <StyledOption onClick={handleClickOfLi} data-value={option}>
      <Text as="p" typography="CaptionBold">
        {children}
      </Text>
    </StyledOption>
  );
};

const StyledOption = styled.li`
  ${mixins.flexBox({ justify: 'start' })}
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

export default Option;
