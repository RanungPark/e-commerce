import { default as DatePickerLib } from 'react-datepicker';
import styled from 'styled-components';

import { ReactComponent as WCalendar } from '@assets/icons/wght400/WCalendar.svg';
import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { zIndex } from '@constants/zIndex';
import { mixins } from '@styles/Mixin';

interface DatePickerProps {
  placeholder: string;
  value: Date | null;
  onChange: (date: Date) => void;
  testId?: string;
}

interface RenderCustomHeaderProps {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const DatePicker = ({
  placeholder,
  value,
  onChange,
  testId,
}: DatePickerProps) => {
  return (
    <DatePickerWrapper data-cy={testId}>
      <DatePickerLabelWrapper>
        <DatePickerLib
          dateFormat="MM.dd.yy"
          selected={value}
          placeholderText={placeholder}
          onChange={(date: Date) => {
            if (date) onChange(date);
          }}
          customInput={<CustomInput readOnly />}
          renderCustomHeader={renderCustomHeader}
        />
        <WCalendar />
      </DatePickerLabelWrapper>
    </DatePickerWrapper>
  );
};

const renderCustomHeader = ({
  date,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  decreaseMonth,
  increaseMonth,
}: RenderCustomHeaderProps) => {
  return (
    <CustomHeader
      date={date}
      prevMonthButtonDisabled={prevMonthButtonDisabled}
      nextMonthButtonDisabled={nextMonthButtonDisabled}
      decreaseMonth={decreaseMonth}
      increaseMonth={increaseMonth}
    />
  );
};

const CustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: RenderCustomHeaderProps) => {
  const formatDate = (d: Date): string => {
    const date = new Date(d);
    const header = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(date);
    return `${header}`;
  };

  return (
    <CustomHeaderWrapper>
      <WChevronLeft
        aria-disabled={prevMonthButtonDisabled}
        onClick={decreaseMonth}
      />
      {formatDate(date)}
      <WChevronRight
        aria-disabled={nextMonthButtonDisabled}
        onClick={increaseMonth}
      />
    </CustomHeaderWrapper>
  );
};

const DatePickerWrapper = styled.div`
  position: relative;
  z-index: ${zIndex.datePicker};

  width: 100%;
  max-height: 56px;
`;

const DatePickerLabelWrapper = styled.label`
  ${mixins.flexBox({ justify: 'space-between' })}
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};

  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};
  }

  .react-datepicker-popper {
    left: 0;
  }

  .react-datepicker {
    position: absolute;
    top: 16px;
    left: auto;

    padding: 24px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    border-radius: 0;
  }

  .react-datepicker__header {
    width: 180px;
    padding: 0;
    border-bottom: none;
    border-radius: 0;

    background-color: ${({ theme }) => theme.colors.white};
  }

  .react-datepicker__aria-live {
    display: none;
  }

  .react-datepicker__day-names {
    ${({ theme }) => theme.typography.CaptionBold}
    ${mixins.flexBox({ justify: 'space-between' })}
    margin-top: 16px;
    padding: 0;

    .react-datepicker__day-name {
      ${mixins.flexBox({})}
      width: 24px;
      height: 24px;
      margin: 0;

      color: ${({ theme }) => theme.colors.gray};
    }
  }

  .react-datepicker__month {
    ${({ theme }) => theme.typography.CaptionBold}
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 16px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  .react-datepicker__day {
    ${mixins.flexBox({})}
    width: 24px;
    height: 24px;
    margin: 0;

    &:hover {
      border-radius: 0;

      background-color: ${({ theme }) => theme.colors.lightgray};

      color: ${({ theme }) => theme.colors.black};
    }
  }

  .react-datepicker__day--selected {
    border-radius: 0;

    background-color: ${({ theme }) => theme.colors.black};

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
  ${({ theme }) => theme.typography.Caption}
  width: 100%;
  height: 100%;
  border: none;

  background-color: inherit;

  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const CustomHeaderWrapper = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading6};
  gap: 16.5px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export default DatePicker;
