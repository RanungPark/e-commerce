import LoginIdForm from '@components/forms/LoginIdForm';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import { loginStateType } from '@pages/LoginPage';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

interface LoginIdProps {
  loginState: FormStateType;
  onSubmit: (e: loginStateType) => void;
  onClick: (e: React.MouseEvent) => void;
  setUsername: (e: string) => void;
  username: string;
}

const LoginId = ({
  loginState,
  onSubmit,
  onClick,
  setUsername,
  username,
}: LoginIdProps) => {
  return (
    <LoginIdWrapper>
      {loginState === 'curr' && (
        <LoginIdForm onSubmit={onSubmit} setUsername={setUsername} />
      )}
      {loginState === 'done' && (
        <CompleteTextFiled onClick={onClick}>{username}</CompleteTextFiled>
      )}
    </LoginIdWrapper>
  );
};

const LoginIdWrapper = styled.div``;

export default LoginId;
