import { useCartStore } from '@store/cartStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { paymentsDone } from '@constants/toast';
import CheckoutSummary from '@pages/sections/CheckoutSummary';
import { FormStateType } from 'src/@types/state';
import BreadCrumb from '@components/utilities/BreadCrumb';
import { mixins } from '@styles/Mixin';
import {
  checkout1stStepDatas,
  checkout2ndStepDatas,
  checkout3rdStepDatas,
} from '@data/inputDatas';
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
    setStepsState(prevState => ({ ...prevState, ...updatedState }));
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
      focus: stepsState.first === 'curr' ? true : false,
      disabled: stepsState.first === 'yet' ? true : false,
    },
    {
      children: 'shipping',
      onClick: handle2ndClick,
      focus: stepsState.second === 'curr' ? true : false,
      disabled: stepsState.second === 'yet' ? true : false,
    },
    {
      children: 'payment',
      onClick: handle3rdClick,
      focus: stepsState.third === 'curr' ? true : false,
      disabled: stepsState.third === 'yet' ? true : false,
    },
  ];

  return (
    <CheckoutPagetWrapper>
      <CheckoutSummary />
      <BreadCrumbWrapper>
        {breadCrumbDatas.map(({ children, onClick, focus, disabled }) => (
          <BreadCrumb onClick={onClick} focus={focus} disabled={disabled}>
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding-bottom: 80px;
`;

const BreadCrumbWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  padding: 40px 0 0 80px;
  width: 100%;
  gap: 16px;
`;

export default CheckoutPage;
