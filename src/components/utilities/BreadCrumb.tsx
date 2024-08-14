import { mixins } from '@styles/Mixin';
import styled, { css } from 'styled-components';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import IconButton from '@components/buttons/IconButton';

interface BreadCrumbProps {
  children: string;
  onClick: (e: React.MouseEvent) => void;
  focus?: boolean;
  disabled?: boolean;
}

type BreadCrumbWrapperProps = Pick<BreadCrumbProps, 'focus' | 'disabled'>;

const BreadCrumb = ({
  children,
  onClick,
  focus = true,
  disabled = false,
}: BreadCrumbProps) => {
  return (
    <BreadCrumbWrapper onClick={onClick} focus={focus} disabled={disabled}>
      {children}
      <IconButton IconComponent={WChevronRight} ariaLabel='chevron right'/>
    </BreadCrumbWrapper>
  );
};

const baseStyle = css`
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.colors.black};
  }

  &:active path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

const focusStyle = css`
  color: ${({ theme }) => theme.colors.darkgray};

  path {
    fill: ${({ theme }) => theme.colors.darkgray};
  }
`;

const notFocusStyle = css`
  color: ${({ theme }) => theme.colors.gray};

  path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const disabledStyle = css`
  color: ${({ theme }) => theme.colors.lightgray};
  cursor: not-allowed;

  path {
    fill: ${({ theme }) => theme.colors.lightgray};
  }
`;

const BreadCrumbWrapper = styled.div<BreadCrumbWrapperProps>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Overline}
  text-transform: uppercase;

  ${({ focus }) => (focus ? focusStyle : notFocusStyle)}
  ${({ disabled }) => (disabled ? disabledStyle : baseStyle)}
`;

export default BreadCrumb;
