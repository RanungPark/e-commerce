import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ActionCardAndImageCardList from '@components/lists/ActionCardAndImageCardList';
import { useNavigate } from 'react-router';
import HomeMain from '@pages/sections/HomeMain';
import { shopDatas } from '@data/shopDatas';
import HomeAbout from '@pages/sections/HomeAbout';
import styled from 'styled-components';

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopClick = (url: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      navigate(url);
    };
  };

  return (
    <HomePageWrapper>
      <HomeMain />
      {shopDatas.map(({ children, imgPath, url }, index) => (
        <ActionCardAndImageCardList
          key={uuidv4()}
          onClick={handleShopClick(url)}
          index={index}
          buttonText="Shop now"
          imgPath={imgPath}
          alt={children}
        >
          {children.trim().replace(/\s+/g, '')}
        </ActionCardAndImageCardList>
      ))}
      <HomeAbout />
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.main``;

export default HomePage;
