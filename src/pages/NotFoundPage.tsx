import { useNavigate } from 'react-router';
import Buttons from '@components/common/Buttons';
import Text from '@components/common/Text';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import Layout from '@components/publics/Layout';

const NotFound = () => {
  const navigate = useNavigate();
  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <Layout>
      <StyledWrapper>
        <Text as="p" typography="Heading5">
          요청하신 페이지를 찾을 수 없습니다.
        </Text>
        <Buttons
          label="메인 페이지로 돌아가기"
          disabled={false}
          buttonType="contained"
          handleClick={goToMainPage}
        />
      </StyledWrapper>
    </Layout>
  );
};

const StyledWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column', justify: 'space-evenly' })}
  width: 60%;
  height: 70vh;
  margin: 0 auto;
  padding: 80px 30px;
`;

export default NotFound;
