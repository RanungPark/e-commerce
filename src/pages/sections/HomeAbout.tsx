import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import PrimaryButton from '@components/buttons/PrimaryButton';
import TextCard from '@components/cards/TextCard';
import TitleCard from '@components/cards/TitleCard';
import { pageWait } from '@constants/toast';
import { aboutUsData, chooseUsDatas } from '@data/textData';

const HomeAbout = () => {
  return (
    <HomeAboutWrapper>
      <TitleCard>About us</TitleCard>
      <HomeAboutTextCardAndButtonWrapper>
        <TextCard label="our story" title={aboutUsData.title}>
          {aboutUsData.children}
        </TextCard>
        <PrimaryButton onClick={pageWait} primaryButtontheme="secondary">
          lern more
        </PrimaryButton>
      </HomeAboutTextCardAndButtonWrapper>
      <TitleCard>Why choose us ?</TitleCard>
      {chooseUsDatas.map(({ title, children }) => (
        <TextCard key={uuidv4()} title={title}>
          {children}
        </TextCard>
      ))}
    </HomeAboutWrapper>
  );
};

const HomeAboutWrapper = styled.article``;

const HomeAboutTextCardAndButtonWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  & > div {
    border: none;
  }

  & > button {
    width: 175px;
    margin-bottom: 80px;
    margin-left: 80px;
  }
`;

export default HomeAbout;
