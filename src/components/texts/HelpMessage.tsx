import styled, { css } from 'styled-components';

import { ReactComponent as CheckCircle } from '@assets/icons/wght300/CheckCircle.svg';
import { ReactComponent as CrossCircle } from '@assets/icons/wght300/CrossCircle.svg';
import { mixins } from '@styles/Mixin';

type HelpMessageTheme = 'default' | 'error' | 'success';

interface HelpMessageProps {
  children: string;
  helpMessageTheme: HelpMessageTheme;
  testId?: string;
}

type HelpMessageChildrenWrapperProps = Pick<
  HelpMessageProps,
  'helpMessageTheme'
>;

const HelpMessage = ({
  children,
  helpMessageTheme = 'default',
  testId,
}: HelpMessageProps) => {
  return (
    <HelpMessageWrapper helpMessageTheme={helpMessageTheme}>
      {helpMessageTheme === 'error' && (
        <CrossCircle aria-label="cross circle" />
      )}
      {helpMessageTheme === 'success' && (
        <CheckCircle aria-label="check circle" />
      )}
      <Text data-cy={testId}>{children}</Text>
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

const HelpMessageWrapper = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'helpMessageTheme',
})<HelpMessageChildrenWrapperProps>`
  ${mixins.flexBox({})};
  ${({ theme }) => theme.typography.CaptionSmall};
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

const Text = styled.p``;

export default HelpMessage;
