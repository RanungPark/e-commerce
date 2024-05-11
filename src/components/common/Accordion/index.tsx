import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as NorthEast } from 'src/assets/icons/wght300/north_east_FILL0_wght300_GRAD0_opsz24.svg';
import { ReactComponent as SouthEast } from 'src/assets/icons/wght300/south_east_FILL0_wght300_GRAD0_opsz24.svg';
import { mixins } from 'src/styles/Mixin';
import Text from '../Text';

interface AccordionProps {
  label: string;
  replay: string;
}

const Accordion = ({ label, replay }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <StyledAccordion>
      <TopBox onClick={handleClick}>
        <Text as="p" typography="Heading4">
          {label}
        </Text>
        {open ? <NorthEast /> : <SouthEast />}
      </TopBox>
      {open ? (
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
