import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as Calendar } from 'src/assets/icons/wght400/calendar_month.svg';
import CustomCalendarHeader, {
  CustomCalenderHeaderProps,
} from './CustomCalendarHeader';
import enGB from 'date-fns/locale/en-GB';
import { mixins } from 'src/styles/Mixin';

const StyledDatePicker = styled.div`
  width: 100%;
  max-height: 56px;
  position: relative;
`;

const LabelWrapper = styled.label`
  ${mixins.flexBox(undefined, 'space-between')}
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
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
    ${mixins.flexBox()}
    ${({ theme }) => theme.typography.CaptionBold}
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
    margin: 24px 0 0 0;
    ${mixins.flexBox('column')}
    gap: 16px;
    ${({ theme }) => theme.typography.CaptionBold}
  }

  .react-datepicker__week {
  }

  .react-datepicker__day {
    margin: 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightgray};
      border-radius: 0;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.white};
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

const DatePickerComponent = () => {
  // registerLocale('en-GB', enGB);

  const renderCustomHeader = ({
    date,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    decreaseMonth,
    increaseMonth,
  }: CustomCalenderHeaderProps) => {
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

  const [startDate, setStartDate] = useState(new Date());
  return (
    <StyledDatePicker>
      <LabelWrapper>
        <DatePicker
          dateFormat="MM.dd.yy"
          selected={startDate}
          locale="en-GB"
          onChange={(date: Date) => setStartDate(date)}
          customInput={<CustomInput />}
          renderCustomHeader={renderCustomHeader}
        />
        <Calendar />
      </LabelWrapper>
    </StyledDatePicker>
  );
};

export default DatePickerComponent;
