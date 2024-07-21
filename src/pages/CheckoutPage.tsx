import Buttons from '@components/common/Buttons';
import DatePicker from '@components/common/DatePicker';
import SelectBox from '@components/common/SelectBox';
import Text from '@components/common/Text';
import TextField from '@components/common/TextField';
import {
  REG_EMAIL,
  REG_NAME,
  REG_NUMBER,
  REG_PHONE,
  REG_STRING_NUMBER,
} from '@constants/reg';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CheckoutPage = () => {
  return <CheckoutForm></CheckoutForm>;
};

type InputTextsType = {
  component: 'textField' | 'datePicker' | 'selectBox';
  registerValue: string;
  required?: string;
  placeholder: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

type CheckoutFormType = {
  id: number;
  title: string;
  inputTexts: InputTextsType[];
  button: string;
}[];

const CheckoutForm = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectOption, setSelectOption] = useState('');

  const handleClickOfLabel = (e: React.MouseEvent<HTMLLabelElement>) => {
    setIsSelectOpen(!isSelectOpen);
  };

  const handleClickOfLi = (e: React.MouseEvent<HTMLLIElement>) => {
    const optionValue = e.currentTarget;
    setSelectOption(optionValue);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const datas: CheckoutFormType = [
    {
      id: 1,
      title: '1 Contact information',
      inputTexts: [
        {
          component: 'textField',
          registerValue: 'name',
          required: '이름을 입력해주세요',
          placeholder: 'Your Name',
          pattern: {
            value: REG_NAME,
            message: '이름을 입력해주세요 한글은 뛰어쓰기 없이 입력해 주세요',
          },
        },
        {
          component: 'textField',
          registerValue: 'email',
          required: '이메일을 입력해주세요',
          placeholder: 'Your Email',
          pattern: {
            value: REG_EMAIL,
            message: '이메일 형식으로 입력해주세요',
          },
        },
        {
          component: 'textField',
          registerValue: 'phone',
          required: '전화번호를 입력해주세요',
          placeholder: 'Your Phone number *',
          pattern: {
            value: REG_PHONE,
            message: `'-' 없이 전화번호를 입력해주세요.`,
          },
        },
      ],
      button: 'Continue to shipping',
    },
    {
      id: 2,
      title: '2 Shipping details',
      inputTexts: [
        {
          component: 'textField',
          registerValue: 'name',
          required: '수신자의 이름을 입력해주세요',
          placeholder: 'Recipients Name',
          pattern: {
            value: REG_NAME,
            message: '이름을 입력해주세요 한글은 뛰어쓰기 없이 입력해 주세요',
          },
        },
        {
          component: 'textField',
          registerValue: 'Phone',
          placeholder: 'Recipients Phone number *',
          required: '수신자의 전화번호를 입력해주세요',
          pattern: {
            value: REG_PHONE,
            message: `'-' 없이 전화번호를 입력해주세요.`,
          },
        },
        {
          component: 'datePicker',
          registerValue: 'delivery',
          placeholder: 'Data of Delivery',
        },
        {
          component: 'selectBox',
          registerValue: 'deliveryTime',
          placeholder: 'Delivery Time',
        },
        {
          component: 'textField',
          registerValue: 'street',
          placeholder: 'Street',
          required: '주소지를 입력해주세요',
          pattern: {
            value: REG_STRING_NUMBER,
            message: `주소지를 올바르게 입력해주세요`,
          },
        },
        {
          component: 'textField',
          registerValue: 'postalCode',
          placeholder: 'Postal code',
          required: '우편번호를 입력해주세요',
          pattern: {
            value: REG_NUMBER,
            message: `우편번호를 올바르게 입력해주세요`,
          },
        },
      ],
      button: 'Continue to Payment',
    },
    {
      id: 3,
      title: '3 Payment',
      inputTexts: [
        {
          component: 'textField',
          registerValue: 'cardNumber',
          placeholder: 'Card Number',
          required: '카드번호를 입력해주세요',
          pattern: {
            value: REG_NUMBER,
            message: `카드번호를 올바르게 입력해주세요`,
          },
        },

        {
          component: 'textField',
          registerValue: 'date',
          placeholder: 'MM / YY',
          required: '/ 을 포함하여 카드 유효기간을 입력해주세요',
          pattern: {
            value: REG_DATE,
            message: `/ 을 포함하여 카드 유효기간을 올바르게 입력해주세요`,
          },
        },
        {
          component: 'textField',
          registerValue: 'cvv',
          placeholder: 'CVV Code',
          required: 'CVV를 입력해주세요',
          pattern: {
            value: REG_NUMBER,
            message: `CVV를 올바르게 입력해주세요`,
          },
        },
      ],
      button: 'make a purchase',
    },
  ];

  const onValid = (data: any) => {};

  return (
    <>
      {datas.map(data => (
        <CheckoutFormWrapper onSubmit={handleSubmit(onValid)} key={data.id}>
          <Text as="p" typography="Subtitle">
            {data.title}
          </Text>
          {data.inputTexts.map(
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
                  <div className="mt-1 mb-1">
                    <DatePicker placeholder={placeholder} />
                  </div>
                );
              } else if (component === 'selectBox') {
                return (
                  <div className="mt-1 mb-1">
                    <SelectBox
                      options={['1', '2', '3', '4', '5', '6']}
                      placeholder={placeholder}
                      selectOption={selectOption}
                      isOpen={isSelectOpen}
                      handleClickOfLabel={handleClickOfLabel}
                      handleClickOfLi={handleClickOfLi}
                    />
                  </div>
                );
                return <></>;
              }
            }
          )}

          <Buttons label={data.button} buttonType="contained" />
        </CheckoutFormWrapper>
      ))}
    </>
  );
};

const CheckoutFormWrapper = styled.form``;

export default CheckoutPage;
