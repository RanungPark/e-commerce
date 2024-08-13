import React from 'react';
import styled, { css } from 'styled-components';
import { BiSolidErrorCircle, BiSolidCheckCircle } from 'react-icons/bi';
import { mixins } from '@styles/Mixin';

type HelpMessageTheme = 'default' | 'error' | 'success';

interface HelpMessageProps {
  children: string;
  helpMessageTheme: HelpMessageTheme;
}

type HelpMessageChildrenWrapperProps = Pick<
  HelpMessageProps,
  'helpMessageTheme'
>;

const HelpMessage = ({
  children,
  helpMessageTheme = 'default',
}: HelpMessageProps) => {
  return (
    <HelpMessageWrapper helpMessageTheme={helpMessageTheme}>
      {helpMessageTheme === 'error' && <BiSolidErrorCircle />}
      {helpMessageTheme === 'success' && <BiSolidCheckCircle />}
      <p>{children}</p>
    </HelpMessageWrapper>
  );
};

const helpMessageStyle = {
  default: css`
    color: ${({ theme }) => theme.colors.gray};
    & path {
      fill: ${({ theme }) => theme.colors.gray};
    }
  `,
  success: css`
    color: ${({ theme }) => theme.colors.success};
    & path {
      fill: ${({ theme }) => theme.colors.success};
    }
  `,
  error: css`
    color: ${({ theme }) => theme.colors.error};
    & path {
      fill: ${({ theme }) => theme.colors.error};
    }
  `,
};

const HelpMessageWrapper = styled.div<HelpMessageChildrenWrapperProps>`
  ${({ theme }) => theme.typography.CaptionSmall};
  ${mixins.flexBox({})};
  ${({ helpMessageTheme }) =>
    helpMessageStyle[helpMessageTheme] || helpMessageStyle.default};

  position: absolute;
  bottom: -20px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;
  }
`;

export default HelpMessage;
