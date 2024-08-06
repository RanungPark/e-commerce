import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { ReactComponent as WChevronLeft } from '@assets/icons/wght400/WChevronLeft.svg';
import { ReactComponent as WChevronRight } from '@assets/icons/wght400/WChevronRight.svg';
import { ReactComponent as WCalendar } from '@assets/icons/wght400/WCalendar.svg';
import { default as DatePickerLib } from 'react-datepicker';

interface DatePickerProps {
  placeholder: string;
  value: Date | null;
  onChange: (date: Date) => void;
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
}: DatePickerProps) => {
  return (
    <DatePickerWrapper>
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
    const header = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      year: 'numeric',
    }).format(d);
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
  width: 100%;
  max-height: 56px;
  position: relative;
`;

const DatePickerLabelWrapper = styled.label`
  ${mixins.flexBox({ justify: 'space-between' })}
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightgray};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.gray};
  }

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.gray};
  }

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
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.typography.Caption}
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const CustomHeaderWrapper = styled.div`
  ${mixins.flexBox({})}
  ${({ theme }) => theme.typography.Heading6};
  background-color: ${({ theme }) => theme.colors.white};
  gap: 16.5px;
`;

export default DatePicker;