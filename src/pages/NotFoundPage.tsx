import { useNavigate } from 'react-router';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import { mixins } from '@styles/Mixin';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrapper>
      요청하신 페이지를 찾을 수 없습니다.
      <PrimaryButton onClick={() => navigate('/')}>
        메인 페이지로 돌아가기
      </PrimaryButton>
    </NotFoundPageWrapper>
  );
};

const NotFoundPageWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', justify: 'space-evenly' })}
  ${({ theme }) => theme.typography.Heading5}
  width: 30%;
  height: 70vh;
  margin: 0 auto;
`;

export default NotFoundPage;
