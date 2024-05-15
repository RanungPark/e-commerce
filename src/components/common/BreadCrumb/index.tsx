import styled from 'styled-components';
import Text from '../Text';
import Icon from '../Icon';
import { ReactComponent as WChevronRight } from 'src/assets/icons/wght400/WChevronRight.svg';
import { mixins } from 'src/styles/Mixin';

interface BreadCrumbProps {
  label: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const BreadCrumb = ({ label, handleClick }: BreadCrumbProps) => {
  return (
    <StyledBreadCrumb onClick={handleClick}>
      <Text as="span" typography="Overline" color="gray">
        {label}
      </Text>
      <Icon as={WChevronRight} fill="gray" />
    </StyledBreadCrumb>
  );
};

const StyledBreadCrumb = styled.div`
  ${mixins.flexBox({})};
  width: auto;
  height: auto;
  cursor: pointer;

  & span {
    margin-right: 8px;
  }

  &:active span {
    color: ${({ theme }) => theme.colors.black};
  }

  &:active path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export default BreadCrumb;
