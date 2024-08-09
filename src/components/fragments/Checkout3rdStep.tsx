import PrimaryButton from '@components/buttons/PrimaryButton';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { checkout3rdStepDatas } from '@data/inputDatas';
import { mixins } from '@styles/Mixin';
import { useForm } from 'react-hook-form';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface Checkout3rdStepProps {
  stepState: FormStateType;
  onSubmit: () => void;
  onClick: (e: React.MouseEvent) => void;
}

const Checkout3rdStep = ({
  stepState,
  onSubmit,
  onClick,
}: Checkout3rdStepProps) => {
  const StepTitle = '3 Payment';

  const { register, handleSubmit } = useForm();

  return (
    <Checkout3rdStepWrapper>
      {stepState === 'yet' && (
        <CompleteTextFiled disabled={true}>{StepTitle}</CompleteTextFiled>
      )}
      {stepState === 'curr' && (
        <Checkout3rdStepForm onSubmit={handleSubmit(onSubmit)}>
          {StepTitle}
          {checkout3rdStepDatas.map(
            ({ registerValue, placeholder, ...rest }) => {
              if (rest.pattern) {
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
              }
            }
          )}
          <PrimaryButton onClick={handleSubmit(onSubmit)}>
            make a purchase
          </PrimaryButton>
        </Checkout3rdStepForm>
      )}
      {stepState === 'done' && (
        <CompleteTextFiled onClick={onClick}>{StepTitle}</CompleteTextFiled>
      )}
    </Checkout3rdStepWrapper>
  );
};

const Checkout3rdStepWrapper = styled.div`
  padding: 80px;
`;

const Checkout3rdStepForm = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
 
  gap: 16px;
  width: 100%;
`;

export default Checkout3rdStep;
