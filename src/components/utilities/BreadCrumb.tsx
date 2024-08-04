import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import IconButton from '@components/buttons/IconButton';

interface BreadCrumbProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
}

const BreadCrumb = ({ children, onClick }: BreadCrumbProps) => {
  return (
    <BreadCrumbWrapper onClick={onClick}>
      {children}
      <IconButton IconComponent={WChevronRight} />
    </BreadCrumbWrapper>
  );
};

const BreadCrumbWrapper = styled.div`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Overline}
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  path {
    fill: ${({ theme }) => theme.colors.gray};
  }

  &:active path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

export default BreadCrumb;
