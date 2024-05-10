import styled from 'styled-components';
import { ReactComponent as CheckFill } from 'src/assets/icons/wght300/check_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as EditSquare } from 'src/assets/icons/wght400/edit_square.svg';
import { mixins } from 'src/styles/Mixin';
import { PartialOptional } from 'src/@types/utils';
import Text from '../Text';
import Icon from '../Icon';

interface CompleteInputProps {
  label: string;
  isFilled: boolean;
}

type OptionalFromCompleteInputProps = PartialOptional<
  CompleteInputProps,
  'isFilled'
>;

type PickStyled = Pick<CompleteInputProps, 'isFilled'>;

const CompleteInput = ({
  label,
  isFilled = true,
}: OptionalFromCompleteInputProps) => {
  return (
    <StyledCompleteInput isFilled={isFilled}>
      <LeftBox>
        {isFilled ? <Icon as={CheckFill} fill="black" /> : <></>}
        <Text as="p" typography="Subtitle">
          {label}
        </Text>
      </LeftBox>
      {isFilled ? <Icon as={EditSquare} fill="gray" /> : <></>}
    </StyledCompleteInput>
  );
};

const StyledCompleteInput = styled.div<PickStyled>`
  ${mixins.flexBox({ justify: 'space-between' })}
  width: 100%;
  height: auto;
  padding: 0 16px 24px 0;
  border-bottom: 1px solid
    ${({ theme, isFilled }) =>
      isFilled ? theme.colors.black : theme.colors.lightgray};

  & p {
    color: ${({ theme, isFilled }) =>
      isFilled ? theme.colors.black : theme.colors.lightgray};
  }
`;

const LeftBox = styled.div`
  ${mixins.flexBox({})}
  gap: 4px;
`;
export default CompleteInput;
