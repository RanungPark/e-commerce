import PrimaryButton from '@components/buttons/PrimaryButton';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { checkout1stStepDatas } from '@data/inputDatas';
import { mixins } from '@styles/Mixin';
import { useForm } from 'react-hook-form';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface Checkout1stStepProps {
  stepState: FormStateType;
  onSubmit: () => void;
  onClick: (e: React.MouseEvent) => void;
}

const Checkout1stStep = ({
  stepState,
  onSubmit,
  onClick,
}: Checkout1stStepProps) => {
  const StepTitle = '1 Contact information';

  const { register, handleSubmit } = useForm();

  return (
    <Checkout1stStepWrapper>
      {stepState === 'yet' && (
        <CompleteTextFiled disabled={true}>{StepTitle}</CompleteTextFiled>
      )}
      {stepState === 'curr' && (
        <Checkout1stStepForm onSubmit={handleSubmit(onSubmit)}>
          {StepTitle}
          {checkout1stStepDatas.map(
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
            Continue to shipping
          </PrimaryButton>
        </Checkout1stStepForm>
      )}
      {stepState === 'done' && (
        <CompleteTextFiled onClick={onClick}>{StepTitle}</CompleteTextFiled>
      )}
    </Checkout1stStepWrapper>
  );
};

const Checkout1stStepWrapper = styled.div`
  padding: 80px;
`;

const Checkout1stStepForm = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  ${({ theme }) => theme.typography.Subtitle}
 
  gap: 16px;
  width: 100%;
`;

export default Checkout1stStep;
