import { IMG_PATH } from '@constants/imgPath';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <HomeMainTitle>
        <h1>오늘의 꽃</h1>
        어떤 상황에도 어울리는 독특하게 제작된 부케와 선물을 찾아보세요. 온라인
        꽃배달 서비스로 기쁨을 전하세요.
      </HomeMainTitle>
      <HomeMainInfo>
        <img alt="Home title person img" src={IMG_PATH.Ohters.HomeRep} />
        <p>
          모던한 오늘의 꽃에서 서비스의 기쁨을 경험하세요. 오늘 온라인으로
          주문하고 신선한 꽃, 식물, 선물을 보내세요..
        </p>
      </HomeMainInfo>
    </HomeMainWrapper>
  );
};

const HomeMainWrapper = styled.section`
  padding: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const HomeMainTitle = styled.section`
  ${({ theme }) => theme.typography.Subtitle}
  padding-bottom: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  & h1 {
    ${({ theme }) => theme.typography.Heading1}
    padding-bottom:16px;
  }
`;

const HomeMainInfo = styled.section`
  ${mixins.flexBox({ justify: 'start', align: 'end' })}
  ${({ theme }) => theme.typography.Caption}

  & img {
    margin-top: 32px;
    border-right: 1px solid ${({ theme }) => theme.colors.black};
    padding-right: 32px;
    height: 256px;
  }

  & p {
    padding-left: 32px;
  }
`;

export default HomeMain;
