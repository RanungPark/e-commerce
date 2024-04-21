import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../assets/icons/wght400/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/icons/wght400/chevron-right.svg';

const StyledCalendarHeader = styled.div`
  ${({ theme }) => theme.flexSet()};
  ${({ theme }) => theme.typography('Heading6')};
  background-color: ${({ theme }) => theme.colors.white};
  gap: 16.5px;
`;

export interface ICustomCalenderHeader {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const CustomCalendarHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ICustomCalenderHeader) => {
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
      <ChevronLeft
        aria-disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
      />
      {formatDate(date)}
      <ChevronRight
        aria-disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
      />
    </StyledCalendarHeader>
  );
};

export default CustomCalendarHeader;
