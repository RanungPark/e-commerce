import styled from 'styled-components';
import Text from '../Text';
import Icon from '../Icon';
import { ReactComponent as ChevronRight } from 'src/assets/icons/wght400/chevron-right.svg';
import { mixins } from 'src/styles/Mixin';

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

interface BreadCrumbProps {
  label: string;
}

const BreadCrumb = ({ label }: BreadCrumbProps) => {
  return (
    <StyledBreadCrumb>
      <Text as="span" typography="Overline" color="gray">
        {label}
      </Text>
      <Icon as={ChevronRight} fill="gray" />
    </StyledBreadCrumb>
  );
};

export default BreadCrumb;
