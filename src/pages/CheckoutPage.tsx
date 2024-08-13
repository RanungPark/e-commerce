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

  return (
    <CheckoutPagetWrapper>
      <CheckoutSummary />
      <Checkout1stStep
        stepState={stepsState.first}
        onSubmit={handle1stSubmit}
        onClick={handle1stClick}
      />
      <Checkout2ndStep
        stepState={stepsState.second}
        onSubmit={handle2ndSubmit}
        onClick={handle2ndClick}
      />
      <Checkout3rdStep
        stepState={stepsState.third}
        onSubmit={handle3rdSubmit}
      />
    </CheckoutPagetWrapper>
  );
};

const CheckoutPagetWrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding-bottom: 80px;
`;

export default CheckoutPage;
