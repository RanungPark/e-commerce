import { useCartStore } from '@store/cartStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { paymentsDone } from '@constants/toast';
import CheckoutSummary from '@components/fragments/CheckoutSummary';
import Checkout1stStep from '@components/fragments/Checkout1stStep';
import Checkout2ndStep from '@components/fragments/Checkout2ndStep';
import Checkout3rdStep from '@components/fragments/Checkout3rdStep';
import { FormStateType } from 'src/@types/state';


const CheckoutPage = () => {
  const [checkout1stStepState, setCheckout1stStepState] =
    useState<FormStateType>('curr');
  const [checkout2ndStepState, setCheckout2ndStepState] =
    useState<FormStateType>('yet');
  const [checkout3rdStepState, setCheckout3rdStepState] =
    useState<FormStateType>('yet');

  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const handle1stSubmit = () => {
    setCheckout1stStepState('done');
    setCheckout2ndStepState('curr');
    setCheckout3rdStepState('yet');
  };

  const handle1stClick = () => {
    setCheckout1stStepState('curr');
    setCheckout2ndStepState('yet');
    setCheckout3rdStepState('yet');
  };

  const handle2ndSubmit = () => {
    setCheckout1stStepState('done');
    setCheckout2ndStepState('done');
    setCheckout3rdStepState('curr');
  };

  const handle2ndClick = () => {
    setCheckout1stStepState('done');
    setCheckout2ndStepState('curr');
    setCheckout3rdStepState('yet');
  };

  const handle3rdSubmit = () => {
    setCheckout1stStepState('curr');
    setCheckout2ndStepState('yet');
    setCheckout3rdStepState('yet');

    paymentsDone();
    clearCart();
    navigate('/');
  };

  return (
    <CheckoutPagetWrapper className="bb-1 pb-10">
      <CheckoutSummary />
      <Checkout1stStep
        stepState={checkout1stStepState}
        onSubmit={handle1stSubmit}
        onClick={handle1stClick}
      />
      <Checkout2ndStep
        stepState={checkout2ndStepState}
        onSubmit={handle2ndSubmit}
        onClick={handle2ndClick}
      />
      <Checkout3rdStep
        stepState={checkout3rdStepState}
        onSubmit={handle3rdSubmit}
        onClick={() => {}}
      />
    </CheckoutPagetWrapper>
  );
};

const CheckoutPagetWrapper = styled.section``;

export default CheckoutPage;
