import IconButton from '@components/buttons/IconButton';
import styled, { css } from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { ReactComponent as WEdit } from '@assets/icons/wght400/WEdit.svg';
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
  padding: 0px 16px 24px 0px;
  width: 100%;
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
  shouldForwardProp: prop => prop !== 'disabled',
})<CompleteTextFiledWrapperProps>`
  ${baseStyle}
  ${({ disabled }) => (disabled ? disabledStyle : enabledStyle)}
`;

const Contents = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

export default CompleteTextFiled;
