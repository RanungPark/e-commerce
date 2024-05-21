import React from 'react';
import ActionCard from '../common/Cards/ActionCard';
import ImageCards from '../common/Cards/ImageCards';
import styled from 'styled-components';
import { ReactComponent as WArrowRight } from 'src/assets/icons/wght400/WArrowRight.svg';
import { ReactComponent as WArrowLeft } from 'src/assets/icons/wght400/WArrowLeft.svg';
import { mixins } from 'src/styles/Mixin';
import Text from '../common/Text';
import { useNavigate } from 'react-router';
import { homeCardsDatas } from 'src/data/homeCards';
import { IMG_PATH } from 'src/constants/imgPath';

const Home = () => {
  return (
    <>
      <StyledHome>
        <HomeHeader>
          <Text as="h1" typography="Heading1">
            {`Chan 
            LuxeBouquets`}
          </Text>
          <Text as="p" typography="Subtitle">
            {`Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
            Spread Joy with Our Online Flower Delivery Service`}
          </Text>
        </HomeHeader>
        <HomeHeaderInfo>
          <img src={IMG_PATH.OTHER.BgGrayPerson} alt="title person img" />
          <Text as="p" typography="Caption">
            {`Experience the joy of giving with our modern floral studio. Order online
        and send fresh flowers, plants and gifts today.`}
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
