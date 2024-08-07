import { IMG_PATH } from '@constants/imgPath';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';

const HomeMain = () => {
  return (
    <HomeMainWrapper className="p-10 bl-1 bb-1">
      <HomeMainTitle className="pb-7 bb-1">
        <h1 className="pb-2">오늘의 꽃</h1>
        어떤 상황에도 어울리는 독특하게 제작된 부케와 선물을 찾아보세요. 온라인
        꽃배달 서비스로 기쁨을 전하세요.
      </HomeMainTitle>
      <HomeMainInfo>
        <img
          className="mt-4 pr-4 br-1"
          alt="Home title person img"
          src={IMG_PATH.Ohters.HomeRep}
        />
        <p className="pl-4">
          모던한 오늘의 꽃에서 서비스의 기쁨을 경험하세요. 오늘 온라인으로
          주문하고 신선한 꽃, 식물, 선물을 보내세요..
        </p>
      </HomeMainInfo>
    </HomeMainWrapper>
  );
};

const HomeMainWrapper = styled.section``;

const HomeMainTitle = styled.section`
  ${({ theme }) => theme.typography.Subtitle}

  & h1 {
    ${({ theme }) => theme.typography.Heading1}
  }
`;

const HomeMainInfo = styled.section`
  ${mixins.flexBox({ justify: 'start', align: 'end' })}
  ${({ theme }) => theme.typography.Caption}

  & img {
    height: 256px;
  }
`;

export default HomeMain;
