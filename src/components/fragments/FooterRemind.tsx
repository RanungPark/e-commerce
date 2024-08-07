import PrimaryButton from '@components/buttons/PrimaryButton';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { subscriptionDone } from '@constants/toast';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

interface FooterRemindForm {
  remind: string;
}

const FooterRemind = () => {
  const { register, handleSubmit, reset } = useForm<FooterRemindForm>();

  const onValid = ({ remind }: FooterRemindForm) => {
    subscriptionDone(remind);
    reset({ remind: '' });
  };

  return (
    <FooterRemindWrapper className="bl-1 bb-1 p-5">
      <p>
        오늘의 꽃을 통해 발렌타인데이, 어버이날, 크리스마스...에서 아름다운 꽃을
        제공하는 것을 잊지 마세요... 7일 전에 알려드립니다. 스팸 또는 주소 공유
        금지
      </p>
      <FooterRemindForm onSubmit={handleSubmit(onValid)}>
        <DefaultTextField>
          <input placeholder="Your Email" {...register('remind')} />
        </DefaultTextField>
        <PrimaryButton onClick={() => {}}>remind</PrimaryButton>
      </FooterRemindForm>
    </FooterRemindWrapper>
  );
};

const FooterRemindWrapper = styled.div`
  ${({ theme }) => theme.typography.Body}
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FooterRemindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default FooterRemind;
