import PrimaryButton from '@components/buttons/PrimaryButton';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import DefaultTextField from '@components/textfields/DefaultTextField';
import DatePicker from '@components/utilities/DatePicker';
import DropDown from '@components/utilities/DropDown';
import { checkout2ndStepDatas, checkoutDropDownDatas } from '@data/inputDatas';
import { mixins } from '@styles/Mixin';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface Checkout2ndStepProps {
  stepState: FormStateType;
  onSubmit: () => void;
  onClick: (e: React.MouseEvent) => void;
}

const Checkout2ndStep = ({
  stepState,
  onSubmit,
  onClick,
}: Checkout2ndStepProps) => {
  const StepTitle = '2 Shipping details';

  const [selectValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const { register, handleSubmit } = useForm();

  return (
    <Checkout2stStepWrapper>
      {stepState === 'yet' && (
        <CompleteTextFiled disabled={true}>{StepTitle}</CompleteTextFiled>
      )}
      {stepState === 'curr' && (
        <Checkout2stStepForm onSubmit={handleSubmit(onSubmit)}>
          {StepTitle}
          {checkout2ndStepDatas.map(
            ({ component, registerValue, placeholder, ...rest }) => {
              if (component === 'textField' && rest.pattern) {
                return (
                  <DefaultTextField>
                    <input
                      {...register(registerValue, {
                        required: rest?.required,
                        pattern: {
                          value: rest.pattern?.value,
                          message: rest.pattern?.message,
                        },
                      })}
                      placeholder={placeholder}
                    />
                  </DefaultTextField>
                );
              } else if (component === 'datePicker') {
                return (
                  <DatePicker
                    placeholder={placeholder}
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                );
              } else if (component === 'selectBox') {
                return (
                  <DropDown
                    value={selectValue}
                    onChange={setSelectValue}
                    options={checkoutDropDownDatas}
                    placeholder={placeholder}
                  ></DropDown>
                );
              }
            }
          )}
          <PrimaryButton onClick={handleSubmit(onSubmit)}>
            Continue to Payment
          </PrimaryButton>
        </Checkout2stStepForm>
      )}
      {stepState === 'done' && (
        <CompleteTextFiled onClick={onClick}>{StepTitle}</CompleteTextFiled>
      )}
    </Checkout2stStepWrapper>
  );
};

const Checkout2stStepWrapper = styled.div`
  padding: 80px;
`;

const Checkout2stStepForm = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
 
  gap: 16px;
  width: 100%;
`;

export default Checkout2ndStep;
