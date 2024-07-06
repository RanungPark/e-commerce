import Buttons from '@components/common/Buttons';
import CompleteInput from '@components/common/CompleteInput';
import Text from '@components/common/Text';
import TextField from '@components/common/TextField';
import { useMutation } from '@tanstack/react-query';
import { fetchLogin } from '@utils/api';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  console.log(errors);
  console.log(getValues().login);
  const regPhone = /^010\d{8}$/;

  const Loginmutation = useMutation({
    mutationFn: (username: string) => fetchLogin(username),
    onSuccess: data => {
      const { message } = data;
      if (message === 'goToJoin') {
        console.log('200');
      } else if (message === 'goToSginup') {
        console.log('202');
      }
    },
    onError: error => {
      console.error('Login failed:', error);
    },
  });

  const onLoginValid = (data: any) => {
    const { username } = data;
    Loginmutation.mutate(username);
  };

  return (
    <LoginWrapper className="bb-1 bl-1 br-1 p-10">
      <Text as="h2" typography="Heading2">
        {'안녕하세요! 오늘의 꽃에 오신 것을 환영합니다.'}
      </Text>
      <StyledFrom className="mt-3 mb-3" onSubmit={handleSubmit(onLoginValid)}>
        <TextField
          label="휴대폰 번호를 사용하여 가입 또는 로그인하기"
          inputState={Object.keys(errors).length === 0 ? undefined : 'error'}
          textHelper={
            Object.keys(errors).length === 0 ? undefined : errors.login?.message
          }
        >
          <input
            {...register('login', {
              required: 'ID를 입력해주세요',
              pattern: {
                value: regPhone,
                message: `'-' 없이 전화번호를 입력해주세요.`,
              },
            })}
            placeholder="+82 XXX XXX XXX"
          />
        </TextField>
        <CompleteInput label={getValues().login} />
        <Buttons label="continue" buttonType="contained"></Buttons>
      </StyledFrom>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  height: 720px;
`;

const StyledFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LoginPage;
