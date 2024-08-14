import { useCartStore } from '@store/cartStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { paymentsDone } from '@constants/toast';
import CheckoutSummary from '@components/fragments/CheckoutSummary';
import Checkout1stStep from '@components/fragments/Checkout1stStep';
import Checkout2ndStep from '@components/fragments/Checkout2ndStep';
import Checkout3rdStep from '@components/fragments/Checkout3rdStep';
import { BreadCrumbType, FormStateType } from 'src/@types/state';
import BreadCrumb from '@components/utilities/BreadCrumb';
import { mixins } from '@styles/Mixin';

type CheckoutStepsState = {
  first: FormStateType;
  second: FormStateType;
  third: FormStateType;
};

type BreadCrunbState = {
  first: BreadCrumbType;
  second: BreadCrumbType;
  third: BreadCrumbType;
};

const CheckoutPage = () => {
  const [stepsState, setStepsState] = useState<CheckoutStepsState>({
    first: 'curr',
    second: 'yet',
    third: 'yet',
  });

  const [breadCrumbState, setBreadCrumbState] = useState<BreadCrunbState>({
    first: 'focus',
    second: 'disabled',
    third: 'disabled',
  });

  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const updateStepsState = (updatedState: Partial<CheckoutStepsState>) => {
    setStepsState(prevState => ({ ...prevState, ...updatedState }));
  };

  const handle1stSubmit = () => {
    updateStepsState({ first: 'done', second: 'curr', third: 'yet' });
    updateBreadCrumbsState({
      first: 'notFocus',
      second: 'focus',
      third: 'disabled',
    });
  };

  const handle1stClick = () => {
    updateStepsState({ first: 'curr', second: 'yet', third: 'yet' });
  };

  const handle2ndSubmit = () => {
    updateStepsState({ first: 'done', second: 'done', third: 'curr' });
    updateBreadCrumbsState({
      first: 'notFocus',
      second: 'notFocus',
      third: 'focus',
    });
  };

  const handle2ndClick = () => {
    updateStepsState({ first: 'done', second: 'curr', third: 'yet' });
  };

  const handle3rdSubmit = () => {
    paymentsDone();
    clearCart();
    navigate('/');
  };

  const updateBreadCrumbsState = (updatedState: BreadCrunbState) => {
    setBreadCrumbState(prevState => ({ ...prevState, ...updatedState }));
  };

  const handle1stCrumbClick = () => {
    updateStepsState({ first: 'curr', second: 'yet', third: 'yet' });
    updateBreadCrumbsState({
      first: 'focus',
      second: 'disabled',
      third: 'disabled',
    });
  };

  const handle2ndCrumbClick = () => {
    updateStepsState({ first: 'done', second: 'curr', third: 'yet' });
    updateBreadCrumbsState({
      first: 'notFocus',
      second: 'focus',
      third: 'disabled',
    });
  };

  const handle3rdCrumbClick = () => {
    updateStepsState({ first: 'done', second: 'done', third: 'curr' });
    updateBreadCrumbsState({
      first: 'notFocus',
      second: 'notFocus',
      third: 'focus',
    });
  };

  const breadCrumbDatas = [
    {
      children: 'information',
      onClick: handle1stCrumbClick,
      focus: breadCrumbState.first === 'focus' ? true : false,
      disabled: breadCrumbState.first === 'disabled' ? true : false,
    },
    {
      children: 'shipping',
      onClick: handle2ndCrumbClick,
      focus: breadCrumbState.second === 'focus' ? true : false,
      disabled: breadCrumbState.second === 'disabled' ? true : false,
    },
    {
      children: 'payment',
      onClick: handle3rdCrumbClick,
      focus: breadCrumbState.third === 'focus' ? true : false,
      disabled: breadCrumbState.third === 'disabled' ? true : false,
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

const BreadCrumbWrapper = styled.div`
  ${mixins.flexBox({ justify: 'start' })}
  padding: 40px 0 0 80px;
  width: 100%;
  gap: 16px;
`;

export default CheckoutPage;
