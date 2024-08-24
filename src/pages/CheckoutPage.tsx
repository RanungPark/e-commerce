import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import BreadCrumb from '@components/utilities/BreadCrumb';
import { paymentsDone } from '@constants/toast';
import {
  checkout1stStepDatas,
  checkout2ndStepDatas,
  checkout3rdStepDatas,
} from '@data/inputDatas';
import CheckoutSummary from '@pages/sections/CheckoutSummary';
import { useCartStore } from '@store/cartStore';
import { mixins } from '@styles/Mixin';
import { FormStateType } from 'src/@types/state';

import CheckoutStep from './sections/CheckoutStep';

type CheckoutStepsState = {
  first: FormStateType;
  second: FormStateType;
  third: FormStateType;
};

const CheckoutPage = () => {
  const [stepsState, setStepsState] = useState<CheckoutStepsState>({
    first: 'curr',
    second: 'yet',
    third: 'yet',
  });

  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const updateStepsState = (updatedState: Partial<CheckoutStepsState>) => {
    setStepsState((prevState) => ({ ...prevState, ...updatedState }));
  };

  const handle1stSubmit = () => {
    updateStepsState({ first: 'done', second: 'curr', third: 'yet' });
  };

  const handle1stClick = () => {
    updateStepsState({ first: 'curr', second: 'yet', third: 'yet' });
  };

  const handle2ndSubmit = () => {
    updateStepsState({ first: 'done', second: 'done', third: 'curr' });
  };

  const handle2ndClick = () => {
    updateStepsState({ first: 'done', second: 'curr', third: 'yet' });
  };

  const handle3rdSubmit = () => {
    paymentsDone();
    clearCart();
    navigate('/');
  };

  const handle3rdClick = () => {
    updateStepsState({ first: 'done', second: 'done', third: 'curr' });
  };

  const breadCrumbDatas = [
    {
      children: 'information',
      onClick: handle1stClick,
      focus: stepsState.first === 'curr',
      disabled: stepsState.first === 'yet',
    },
    {
      children: 'shipping',
      onClick: handle2ndClick,
      focus: stepsState.second === 'curr',
      disabled: stepsState.second === 'yet',
    },
    {
      children: 'payment',
      onClick: handle3rdClick,
      focus: stepsState.third === 'curr',
      disabled: stepsState.third === 'yet',
    },
  ];

  return (
    <CheckoutPagetWrapper>
      <CheckoutSummary />
      <BreadCrumbWrapper>
        {breadCrumbDatas.map(({ children, onClick, focus, disabled }) => (
          <BreadCrumb
            key={uuidv4()}
            onClick={onClick}
            focus={focus}
            disabled={disabled}
          >
            {children}
          </BreadCrumb>
        ))}
      </BreadCrumbWrapper>
      <CheckoutStep
        stepState={stepsState.first}
        onSubmit={handle1stSubmit}
        onClick={handle1stClick}
        stepTitle="1 Contact Information"
        checkoutFormDatas={checkout1stStepDatas}
      />
      <CheckoutStep
        stepState={stepsState.second}
        onSubmit={handle2ndSubmit}
        onClick={handle2ndClick}
        stepTitle="2 Shipping Details"
        checkoutFormDatas={checkout2ndStepDatas}
      />
      <CheckoutStep
        stepState={stepsState.third}
        onSubmit={handle3rdSubmit}
        stepTitle="3 Payment"
        checkoutFormDatas={checkout3rdStepDatas}
      />
    </CheckoutPagetWrapper>
  );
};

const CheckoutPagetWrapper = styled.section`
  padding-bottom: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const BreadCrumbWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  gap: 16px;

  width: 100%;
  padding: 40px 0 0 80px;
`;

export default CheckoutPage;
