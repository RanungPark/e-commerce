import PrimaryButton from '@components/buttons/PrimaryButton';
import LoginId from '@pages/sections/LoginId';
import LoginPassword from '@pages/sections/LoginPassword';
import { useUserStore } from '@store/userStore';
import { mixins } from '@styles/Mixin';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FormStateType } from 'src/@types/state';
import styled from 'styled-components';

export type loginStateType = 'signin' | 'join' | 'signup' | 'done';

const LoginPage = () => {
  const [loginCurrState, setLoginCurrState] =
    useState<loginStateType>('signin');
  const [loginIdState, setLoginIdState] = useState<FormStateType>('curr');
  const [loginPasswordState, setLoginPasswordState] =
    useState<FormStateType>('yet');
  const [username, setUsername] = useState('');

  const { isLoggedIn } = useUserStore();
  const navigate = useNavigate();

  const goToMainPage = () => navigate('/');

  const handleIdSubmit = (state: loginStateType) => {
    setLoginCurrState(state);
    setLoginIdState('done');
    setLoginPasswordState('curr');
  };

  const handleIdClick = () => {
    setLoginCurrState('signin');
    setLoginIdState('curr');
    setLoginPasswordState('yet');
  };

  const handlePasswordSubmit = (state: loginStateType) => {
    setLoginCurrState(state);
  };

  return (
    <>
      {isLoggedIn ? (
        <LoginSuccessWrapper>
          로그인이 완료되었습니다
          <PrimaryButton onClick={goToMainPage}>
            메인 페이지로 돌아가기
          </PrimaryButton>
        </LoginSuccessWrapper>
      ) : (
        <LoginPageWrapper>
          <LoginMessageWrapper data-cy="loginHelp">
            <LoginMessage loginCurrState={loginCurrState} />
          </LoginMessageWrapper>
          <LoginId
            loginState={loginIdState}
            onClick={handleIdClick}
            onSubmit={handleIdSubmit}
            setUsername={setUsername}
            username={username}
          />
          <LoginPassword
            loginState={loginPasswordState}
            onSubmit={handlePasswordSubmit}
            username={username}
            loginCurrState={loginCurrState}
          />
        </LoginPageWrapper>
      )}
    </>
  );
};

const LoginMessage = ({
  loginCurrState,
}: {
  loginCurrState: loginStateType;
}) => {
  switch (loginCurrState) {
    case 'signin':
      return <>안녕하세요! 오늘의 꽃에 오신 것을 환영합니다.</>;
    case 'join':
      return <>로그인을 진행해주세요</>;
    case 'signup':
      return <>회원가입을 진행해주세요</>;
    default:
      return null;
  }
};

const LoginMessageWrapper = styled.div``;

const LoginSuccessWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', justify: 'space-evenly' })}
  ${({ theme }) => theme.typography.Heading5}
  width: 100%;
  height: 55vh;
  margin: 0 auto;
  padding: 80px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const LoginPageWrapper = styled.div`
  ${({ theme }) => theme.typography.Heading2}
  display: flex;
  flex-direction: column;
  gap: 10vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 100px 40px 20vh 40px;
`;

export default LoginPage;
