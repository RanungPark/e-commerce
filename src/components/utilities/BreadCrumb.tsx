import styled, { css } from 'styled-components';

import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { mixins } from '@styles/Mixin';
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
      <WChevronRight aria-label="chevron right" />
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
  color: ${({ theme }) => theme.colors.black};

  path {
    fill: ${({ theme }) => theme.colors.black};
  }
`;

const notFocusStyle = css`
  color: ${({ theme }) => theme.colors.darkgray};

  path {
    fill: ${({ theme }) => theme.colors.darkgray};
  }
`;

const disabledStyle = css`
  color: ${({ theme }) => theme.colors.gray};
  pointer-events: none;

  path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const BreadCrumbWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'focus',
})<BreadCrumbWrapperProps>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.Overline}
  text-transform: uppercase;
  font-weight: 700;
  ${({ focus }) => (focus ? focusStyle : notFocusStyle)}
  ${({ disabled }) => (disabled ? disabledStyle : baseStyle)}
`;

export default BreadCrumb;
