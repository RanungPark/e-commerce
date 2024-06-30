import { ReactComponent as ArrowTopRight } from '@assets/icons/wght300/ArrowTopRight.svg';
import { ReactComponent as ArrowDownRight } from '@assets/icons/wght300/ArrowDownRight.svg';
import Text from '../Text';
import styled from 'styled-components';
import { mixins } from '@styles/Mixin';

interface AccordionProps {
  label: string;
  replay: string;
  isOpen: boolean;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const Accordion = ({ label, replay, isOpen, handleClick }: AccordionProps) => {
  return (
    <StyledAccordion>
      <TopBox onClick={handleClick}>
        <Text as="p" typography="Heading4">
          {label}
        </Text>
        {isOpen ? <ArrowTopRight /> : <ArrowDownRight />}
      </TopBox>
      {isOpen ? (
        <BottomBox>
          <Text as="p" typography="Body">
            {replay}
          </Text>
        </BottomBox>
      ) : (
        <></>
      )}
    </StyledAccordion>
  );
};

const StyledAccordion = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 0;
`;

const TopBox = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  gap: 16px;
  cursor: pointer;
`;

const BottomBox = styled.div`
  margin-top: 16px;
  opacity: 0.9;
`;

export default Accordion;
