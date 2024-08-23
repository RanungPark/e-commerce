import PrimaryButton from '@components/buttons/PrimaryButton';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { REG_PHONE } from '@constants/reg';
import { loginStateType } from '@pages/LoginPage';
import { mixins } from '@styles/Mixin';
import { useMutation } from '@tanstack/react-query';
import { fetchLogin } from '@utils/api';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface LoginIdFormProps {
  onSubmit: (e: loginStateType) => void;
  setUsername: (e: string) => void;
}

type LoginIdFormType = {
  username: string;
};

const LoginIdForm = ({ onSubmit, setUsername }: LoginIdFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginIdFormType>();

  const LoginIdMutation = useMutation({
    mutationFn: (username: string) => fetchLogin(username),
    onSuccess: data => {
      const { message } = data;
      const username = getValues().username;

      if (message === '로그인 진행') {
        setUsername(username);
        onSubmit('join');
      } else if (message === '회원가입 진행') {
        setUsername(username);
        onSubmit('signup');
      }
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });

  const onLoginValid = ({ username }: LoginIdFormType) => {
    LoginIdMutation.mutate(username);
  };

  return (
    <LoginIdFormWrapper>
      <DefaultTextField
        inputState={errors.username ? 'error' : undefined}
        hasLabel={true}
        label="휴대폰 번호를 사용하여 가입 또는 로그인하기"
        hasHelpMessage={true}
        helpMessage={errors.username?.message}
        helpTestId="phoneHelp"
      >
        <input
          {...register('username', {
            required: 'ID를 입력해주세요',
            pattern: {
              value: REG_PHONE,
              message: `'-' 없이 전화번호를 입력해주세요.`,
            },
          })}
          data-cy="phoneInput"
          placeholder="+82 XXX XXX XXX"
          aria-label="username"
        />
      </DefaultTextField>
      <PrimaryButton testId="phoneBtn" onClick={handleSubmit(onLoginValid)}>
        continue
      </PrimaryButton>
    </LoginIdFormWrapper>
  );
};

const LoginIdFormWrapper = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 32px;
  width: 100%;
`;

export default LoginIdForm;
