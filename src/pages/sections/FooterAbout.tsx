import TextButton from '@components/buttons/TextButton';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import { pageWait } from '@constants/toast';
import { aboutDatas } from '@data/buttonDatas';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const FooterAbout = () => {
  return (
    <FooterAboutWrapper>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {aboutDatas.map(children => (
          <TextButton key={uuidv4()} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterAboutWrapper>
  );
};

const FooterAboutWrapper = styled.div`
  padding: 40px;
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

export default FooterAbout;