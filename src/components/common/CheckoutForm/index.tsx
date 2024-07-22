import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Text from '../Text';
import { CheckoutFormType, deliveryTimeOption } from '@data/checkout';
import TextField from '../TextField';
import DatePicker from '../DatePicker';
import SelectBox from '../SelectBox';
import Buttons from '../Buttons';

type CheckoutFormProps = {
  checkoutFormData: CheckoutFormType;
  handlerFunc: () => void;
};

const CheckoutForm = ({ checkoutFormData, handlerFunc }: CheckoutFormProps) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectOption, setSelectOption] = useState('Delivery Time');

  const handleClickOfLabel = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsSelectOpen(!isSelectOpen);
  };

  const handleClickOfLi = (e: React.MouseEvent<HTMLLIElement>) => {
    const optionValue = e.currentTarget.getAttribute('data-value');
    if (optionValue) {
      setSelectOption(optionValue);
    }
    setIsSelectOpen(false);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <CheckoutFormWrapper onSubmit={handleSubmit(handlerFunc)}>
        <Text as="p" typography="Subtitle">
          {checkoutFormData.title}
        </Text>
        {checkoutFormData.inputTexts.map(
          ({ component, registerValue, placeholder, ...rest }) => {
            if (component === 'textField' && rest.pattern) {
              return (
                <TextField key={registerValue}>
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
                </TextField>
              );
            } else if (component === 'datePicker') {
              return (
                <div className="mt-2" key={component}>
                  <DatePicker placeholder={placeholder} />
                </div>
              );
            } else if (component === 'selectBox') {
              return (
                <div className="mt-2" key={component}>
                  <SelectBox
                    options={deliveryTimeOption}
                    placeholder={placeholder}
                    selectOption={selectOption}
                    isOpen={isSelectOpen}
                    handleClickOfLabel={handleClickOfLabel}
                    handleClickOfLi={handleClickOfLi}
                  />
                </div>
              );
            }
          }
        )}
        <div className="mt-2">
          <Buttons label={checkoutFormData.button} buttonType="contained" />
        </div>
      </CheckoutFormWrapper>
    </>
  );
};

const CheckoutFormWrapper = styled.form``;

export default CheckoutForm;
