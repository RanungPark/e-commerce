import {
  REG_DATE,
  REG_EMAIL,
  REG_NAME,
  REG_NUMBER,
  REG_PHONE,
  REG_STRING_NUMBER,
} from '@constants/reg';

export type InputTextsType = {
  component: 'textField' | 'datePicker' | 'selectBox';
  registerValue: string;
  required?: string;
  placeholder: string;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export const checkoutDropDownDatas = [
  '8AM',
  '9AM',
  '10AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
];

export const checkout1stStepDatas: InputTextsType[] = [
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
];

export const checkout2ndStepDatas: InputTextsType[] = [
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
];

export const checkout3rdStepDatas: InputTextsType[] = [
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
];
