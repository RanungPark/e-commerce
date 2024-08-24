import styled, { css } from 'styled-components';

import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { ReactComponent as WEdit } from '@assets/icons/wght400/WEdit.svg';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';

interface CompleteTextFiledProps {
  onClick?: (e: React.MouseEvent) => void;
  children: string;
  disabled?: boolean;
  buttonTestId?: string;
}

type CompleteTextFiledWrapperProps = Pick<CompleteTextFiledProps, 'disabled'>;

const CompleteTextFiled = ({
  onClick,
  children,
  disabled = false,
  buttonTestId,
}: CompleteTextFiledProps) => {
  return (
    <CompleteTextFiledWrapper disabled={disabled}>
      <Contents>
        {!disabled && <Check />}
        {children}
      </Contents>
      {!disabled && (
        <IconButton
          onClick={onClick}
          IconComponent={WEdit}
          ariaLabel="edit"
          testId={buttonTestId}
        />
      )}
    </CompleteTextFiledWrapper>
  );
};

const baseStyle = css`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
  width: 100%;
  padding: 0 16px 24px 0;
`;

const enabledStyle = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  color: ${({ theme }) => theme.colors.black};

  & button path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const disabledStyle = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};

  color: ${({ theme }) => theme.colors.gray};
`;

const CompleteTextFiledWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'disabled',
})<CompleteTextFiledWrapperProps>`
  ${({ disabled }) => (disabled ? disabledStyle : enabledStyle)}
  ${baseStyle}
`;

const Contents = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

export default CompleteTextFiled;
