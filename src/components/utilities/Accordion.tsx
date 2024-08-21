import styled from 'styled-components';
import { ReactComponent as ArrowTopRight } from '@assets/icons/wght300/ArrowTopRight.svg';
import { ReactComponent as ArrowDownRight } from '@assets/icons/wght300/ArrowDownRight.svg';
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
    <AccordionWrapper>
      <TitleWrapper onClick={handleClickn}>
        {title}
        {isOpen ? (
          <ArrowTopRight aria-label="top and right arrow" />
        ) : (
          <ArrowDownRight aria-label="down and right arrow" />
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 24px 0;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
  ${({ theme }) => theme.typography.Heading4}
  width: 100%;
  opacity: 1;
`;

export default Accordion;
