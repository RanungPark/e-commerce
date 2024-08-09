import { useNavigate } from 'react-router';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import PrimaryButton from '@components/buttons/PrimaryButton';

const NotFound = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <NotFoundWrapper>
      요청하신 페이지를 찾을 수 없습니다.
      <PrimaryButton onClick={goToMainPage}>
        메인 페이지로 돌아가기
      </PrimaryButton>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', justify: 'space-evenly' })}
  ${({ theme }) => theme.typography.Heading5}

  width: 30%;
  height: 70vh;
  margin: 0 auto;
`;

export default NotFound;
