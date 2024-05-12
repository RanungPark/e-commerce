import React from 'react';
import styled from 'styled-components';
import { ReactComponent as WChevronLeft } from 'src/assets/icons/wght400/WChevronLeft.svg';
import { ReactComponent as WChevronRight } from 'src/assets/icons/wght400/WChevronRight.svg';
import { mixins } from 'src/styles/Mixin';
import { renderCustomHeaderProps } from '.';

const CustomCalendarHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: renderCustomHeaderProps) => {
  const formatDate = (d: Date): string => {
    const date = new Date(d);
    const header = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
    return `${header}`;
  };
  return (
    <StyledCalendarHeader>
      <WChevronLeft
        aria-disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
      />
      {formatDate(date)}
      <WChevronRight
        aria-disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
      />
    </StyledCalendarHeader>
  );
};

const StyledCalendarHeader = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading6};
  background-color: ${({ theme }) => theme.colors.white};
  gap: 16.5px;
`;

export default CustomCalendarHeader;
