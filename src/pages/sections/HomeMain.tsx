import styled from 'styled-components';

import { mixins } from '@styles/Mixin';
import { fetchImgURL, imgOptimization } from '@utils/img';

const HomeMain = () => {
  return (
    <HomeMainWrapper>
      <HomeMainTitle>
        <TitleText>오늘의 꽃이에용</TitleText>
        어떤 상황에도 어울리는 독특하게 제작된 부케와 선물을 찾아보세요. 온라인
        꽃배달 서비스로 기쁨을 전하세요.
      </HomeMainTitle>
      <HomeMainInfo>
        <InfoImg
          alt="Home title person img"
          src={
            fetchImgURL({ category: 'others', name: 'home_rep' }) +
            imgOptimization({ width: 300, height: 300 })
          }
        />
        <InfoSentence>
          모던한 오늘의 꽃에서 서비스의 기쁨을 경험하세요. 오늘 온라인으로
          주문하고 신선한 꽃, 식물, 선물을 보내세요..
        </InfoSentence>
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
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.typography.Heading1}
  padding-bottom:16px;
`;

const HomeMainInfo = styled.section`
  ${mixins.flexBox({ justify: 'start', align: 'end' })}
  ${({ theme }) => theme.typography.Caption}
`;

const InfoImg = styled.img`
  width: 100%;
  height: 256px;
  margin-top: 32px;
  padding-right: 32px;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
`;

const InfoSentence = styled.p`
  padding-left: 32px;
`;

export default HomeMain;
