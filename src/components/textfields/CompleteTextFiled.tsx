import IconButton from '@components/buttons/IconButton';
import styled, { css } from 'styled-components';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import { ReactComponent as WEdit } from '@assets/icons/wght400/WEdit.svg';
import { mixins } from '@styles/Mixin';

interface CompleteTextFiledProps {
  onClick: (e: React.MouseEvent) => void;
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
    <CompleteTextFiledWrapper disabled={disabled} className="pb-3 pr-2">
      <CompleteTextFiledChildrenWrapper>
        {!disabled ? <Check /> : <></>}
        {children}
      </CompleteTextFiledChildrenWrapper>
      {!disabled ? (
        <IconButton onClick={onClick} IconComponent={WEdit} />
      ) : (
        <></>
      )}
    </CompleteTextFiledWrapper>
  );
};

const defalutStyle = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
`;

const disabledStyle = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
  color: ${({ theme }) => theme.colors.lightgray};
`;

const CompleteTextFiledWrapper = styled.div<CompleteTextFiledWrapperProps>`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Subtitle}
  ${({ disabled }) => (!disabled ? defalutStyle : disabledStyle)}
  
  width: 100%;

  & button path {
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

const CompleteTextFiledChildrenWrapper = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;

export default CompleteTextFiled;
