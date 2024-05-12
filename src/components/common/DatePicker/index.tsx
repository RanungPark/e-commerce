import React, { useState } from 'react';
import styled from 'styled-components';
import { default as DatePickerlib } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as WCalendar } from 'src/assets/icons/wght400/WCalendar.svg';
import CustomCalendarHeader from './DatePickerHeader';
import { mixins } from 'src/styles/Mixin';

export interface renderCustomHeaderProps {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const renderCustomHeader = ({
  date,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  decreaseMonth,
  increaseMonth,
}: renderCustomHeaderProps) => {
  return (
    <CustomCalendarHeader
      date={date}
      prevMonthButtonDisabled={prevMonthButtonDisabled}
      nextMonthButtonDisabled={nextMonthButtonDisabled}
      decreaseMonth={decreaseMonth}
      increaseMonth={increaseMonth}
    />
  );
};

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <StyledDatePicker>
      <LabelWrapper>
        <DatePickerlib
          dateFormat="MM.dd.yy"
          selected={startDate}
          locale="en-GB"
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomInput />}
          renderCustomHeader={renderCustomHeader}
        />
        <WCalendar />
      </LabelWrapper>
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.div`
  width: 100%;
  max-height: 56px;
  position: relative;
`;

const LabelWrapper = styled.label`
  ${mixins.flexBox({ justify: 'space-between' })}
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 16px;
  cursor: pointer;

  .react-datepicker {
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0;
    position: absolute;
    top: 16px;
    left: 0;
    padding: 24px;
  }

  .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: none;
    border-radius: 0;
    padding: 0;
  }

  .react-datepicker__day-names {
    ${({ theme }) => theme.typography.CaptionBold}
    ${mixins.flexBox({})}
    gap: 8px;
    padding: 0;
    margin-top: 16px;

    .react-datepicker__day-name {
      color: ${({ theme }) => theme.colors.gray};
      width: auto;
      height: auto;
      margin: 0;
    }
  }

  .react-datepicker__month {
    ${({ theme }) => theme.typography.CaptionBold}
    ${mixins.flexBox({ direction: 'column' })}
    margin: 24px 0 0 0;
    gap: 16px;
  }

  .react-datepicker__day {
    margin: 0;

    &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.colors.lightgray};
      border-radius: 0;
    }
  }

  .react-datepicker__day--selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 0;
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.colors.gray};
  }

  .react-datepicker__triangle {
    display: none;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const CustomInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export default DatePicker;
