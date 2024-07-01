import React from 'react';
import ActionCard from '../common/Cards/ActionCard';
import ImageCards from '../common/Cards/ImageCards';
import styled from 'styled-components';
import { ReactComponent as WArrowRight } from '@assets/icons/wght400/WArrowRight.svg';
import { ReactComponent as WArrowLeft } from '@assets/icons/wght400/WArrowLeft.svg';
import { mixins } from '@styles/Mixin';
import Text from '../common/Text';
import { useNavigate } from 'react-router';
import { homeCardsDatas } from '@data/homeCards';
import { IMG_PATH } from '@constants/imgPath';

const Home = () => {
  return (
    <>
      <StyledHome>
        <HomeHeader>
          <Text as="h1" typography="Heading1">
            {`오늘의 꽃 `}
          </Text>
          <Text as="p" typography="Subtitle">
            {`어떤 상황에도 어울리는 독특하게 제작된 부케와 선물을 찾아보세요. 온라인 꽃배달 서비스로 기쁨을 전하세요.`}
          </Text>
        </HomeHeader>
        <HomeHeaderInfo>
          <img src={IMG_PATH.OTHER.BgGrayPerson} alt="title person img" />
          <Text as="p" typography="Caption">
            {`모던한 오늘의 꽃에서 서비스의 기쁨을 경험하세요. 오늘 온라인으로 주문하고 신선한 꽃, 식물, 선물을 보내세요..`}
          </Text>
        </HomeHeaderInfo>
      </StyledHome>
      <CardsWrapper>
        {homeCardsDatas.map(({ label, productImg }, i) =>
          i % 2 === 0 ? (
            <ActionNextToImage label={label} productImg={productImg} />
          ) : (
            <ImageNextToActcion label={label} productImg={productImg} />
          )
        )}
      </CardsWrapper>
    </>
  );
};

interface CardProps {
  label: string;
  productImg: string;
}

const ActionNextToImage = ({ label, productImg }: CardProps) => {
  const navigate = useNavigate();
  const goToMainPate = () => {
    navigate(`/categories/${label.toLowerCase()}`);
  };

  return (
    <>
      <ActionCard
        label={label}
        buttonLabel="Shop now"
        rightIcon={WArrowRight}
        handleClick={goToMainPate}
      />
      <ImageCards cardType="main" productImg={productImg} />
    </>
  );
};

const ImageNextToActcion = ({ label, productImg }: CardProps) => {
  const navigate = useNavigate();
  const goToMainPate = () => {
    navigate(`/categories/${label.toLowerCase()}`);
  };

  return (
    <>
      <ImageCards cardType="main" productImg={productImg} />
      <ActionCard
        label={label}
        buttonLabel="Shop now"
        leftIcon={WArrowLeft}
        handleClick={goToMainPate}
      />
    </>
  );
};

const StyledHome = styled.section`
  ${mixins.border({ width: 'right' })};
  ${mixins.border({ width: 'leftAndBottom' })};
  padding: 80px;
`;

const HomeHeader = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding-bottom: 54px;

  & h1 {
    white-space: pre-line;
    padding-bottom: 16px;
  }
`;

const HomeHeaderInfo = styled.section`
  ${mixins.flexBox({ justify: 'start', align: 'end' })}

  & img {
    margin-top: 24px;
    padding-right: 24px;
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  & p {
    padding-left: 24px;
  }
`;

const CardsWrapper = styled.section`
  ${mixins.border({ width: 'right' })}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default Home;
