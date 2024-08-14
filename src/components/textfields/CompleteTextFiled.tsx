import IconButton from '@components/buttons/IconButton';
import styled, { css } from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { ReactComponent as WEdit } from '@assets/icons/wght400/WEdit.svg';
import { mixins } from '@styles/Mixin';

interface CompleteTextFiledProps {
  onClick?: (e: React.MouseEvent) => void;
  children: string;
  disabled?: boolean;
}

type CompleteTextFiledWrapperProps = Pick<CompleteTextFiledProps, 'disabled'>;

const CompleteTextFiled = ({
  onClick,
  children,
  disabled = false,
}: CompleteTextFiledProps) => {
  return (
    <CompleteTextFiledWrapper disabled={disabled}>
      <CompleteTextFiledChildrenWrapper>
        {!disabled && <Check />}
        {children}
      </CompleteTextFiledChildrenWrapper>
      {!disabled && <IconButton onClick={onClick} IconComponent={WEdit} ariaLabel='edit'/>}
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
  color: ${({ theme }) => theme.colors.lightgray};
`;

const CompleteTextFiledWrapper = styled.div<CompleteTextFiledWrapperProps>`
  ${baseStyle}
  ${({ disabled }) => (disabled ? disabledStyle : enabledStyle)}
`;

const CompleteTextFiledChildrenWrapper = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

export default CompleteTextFiled;
