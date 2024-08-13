import PrimaryButton from '@components/buttons/PrimaryButton';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { REG_PHONE } from '@constants/reg';
import { loginStateType } from '@pages/LoginPage';
import { mixins } from '@styles/Mixin';
import { useMutation } from '@tanstack/react-query';
import { fetchLogin } from '@utils/api';
import { useForm } from 'react-hook-form';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface LoginIdProps {
  loginState: FormStateType;
  onSubmit: (e: loginStateType) => void;
  onClick: (e: React.MouseEvent) => void;
  setUsername: (e: string) => void;
}

interface LoginIdForm {
  username: string;
}

const LoginId = ({
  loginState,
  onSubmit,
  onClick,
  setUsername,
}: LoginIdProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginIdForm>();

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

  const onLoginValid = ({ username }: LoginIdForm) => {
    LoginIdMutation.mutate(username);
  };

  return (
    <LoginIdWrapper>
      {loginState === 'curr' && (
        <LoginIdForm onSubmit={handleSubmit(onLoginValid)}>
          <DefaultTextField
            inputState={errors.username ? 'error' : undefined}
            hasLabel={true}
            label="휴대폰 번호를 사용하여 가입 또는 로그인하기"
            hasHelpMessage={true}
            helpMessage={errors.username?.message}
          >
            <input
              {...register('username', {
                required: 'ID를 입력해주세요',
                pattern: {
                  value: REG_PHONE,
                  message: `'-' 없이 전화번호를 입력해주세요.`,
                },
              })}
              placeholder="+82 XXX XXX XXX"
            />
          </DefaultTextField>
          <PrimaryButton onClick={handleSubmit(onLoginValid)}>
            continue
          </PrimaryButton>
        </LoginIdForm>
      )}
      {loginState === 'done' && (
        <CompleteTextFiled onClick={onClick}>
          {getValues().username?.toString()}
        </CompleteTextFiled>
      )}
    </LoginIdWrapper>
  );
};

const LoginIdWrapper = styled.div``;

const LoginIdForm = styled.form`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 32px;
  width: 100%;
`;

export default LoginId;
