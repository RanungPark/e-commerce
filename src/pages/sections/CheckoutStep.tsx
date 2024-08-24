import styled from 'styled-components';

import CheckoutForm from '@components/forms/CheckoutForm';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import { InputTextsType } from '@data/inputDatas';
import { mixins } from '@styles/Mixin';
import { FormStateType } from 'src/@types/state';

interface CheckoutStepProps {
  stepState: FormStateType;
  onSubmit: () => void;
  onClick?: (e: React.MouseEvent) => void;
  stepTitle: string;
  checkoutFormDatas: InputTextsType[];
}

const CheckoutStep = ({
  stepState,
  onSubmit,
  onClick,
  stepTitle,
  checkoutFormDatas,
}: CheckoutStepProps) => {
  return (
    <CheckoutStepWrapper>
      {stepState === 'yet' && (
        <CompleteTextFiled disabled={true}>{stepTitle}</CompleteTextFiled>
      )}
      {stepState === 'curr' && (
        <>
          {stepTitle}
          <CheckoutForm
            onSubmit={onSubmit}
            checkoutFormDatas={checkoutFormDatas}
          />
        </>
      )}
      {stepState === 'done' && (
        <CompleteTextFiled onClick={onClick}>{stepTitle}</CompleteTextFiled>
      )}
    </CheckoutStepWrapper>
  );
};

const CheckoutStepWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
  gap: 16px;

  padding: 80px;
`;

export default CheckoutStep;
