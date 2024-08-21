import styled from 'styled-components';
import { ReactComponent as ArrowTopRight } from '@assets/icons/wght300/ArrowTopRight.svg';
import { ReactComponent as ArrowDownRight } from '@assets/icons/wght300/ArrowDownRight.svg';
import IconButton from '@components/buttons/IconButton';
import { useState } from 'react';
import { mixins } from '@styles/Mixin';

interface AccordionProps {
  title: string;
  children: string;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper className="bb-1 pt-3 pb-3">
      <TitleWrapper onClick={handleClickn}>
        {title}
        {isOpen ? (
          <IconButton
            IconComponent={ArrowTopRight}
            ariaLabel="top and right arrow"
          />
        ) : (
          <IconButton
            IconComponent={ArrowDownRight}
            ariaLabel="down and right arrow"
          />
        )}
      </TitleWrapper>
      {isOpen ? children : <></>}
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Body}
  width: 100%;
  opacity: 0.9;
  gap: 16px;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Heading4}
  width: 100%;
  opacity: 1;
`;

export default Accordion;
