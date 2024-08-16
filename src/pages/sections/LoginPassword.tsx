import LoginPasswordForm from '@components/forms/LoginPasswordForm';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import { loginStateType } from '@pages/LoginPage';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface LoginPasswordProps {
  loginState: FormStateType;
  onSubmit: (e: loginStateType) => void;
  username: string;
  loginCurrState: loginStateType;
}

interface LoginPasswordForm {
  password: string;
}

const LoginPassword = ({
  loginState,
  onSubmit,
  username,
  loginCurrState,
}: LoginPasswordProps) => {
  return (
    <LoginPasswordWrapper>
      {loginState === 'yet' && (
        <CompleteTextFiled disabled={true}>
          비밀번호를 입력해주세요.
        </CompleteTextFiled>
      )}

      {loginState === 'curr' && (
        <LoginPasswordForm
          onSubmit={onSubmit}
          username={username}
          loginCurrState={loginCurrState}
        />
      )}
    </LoginPasswordWrapper>
  );
};

const LoginPasswordWrapper = styled.div``;

export default LoginPassword;
