import TextButton from '@components/buttons/TextButton';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import { pageWait } from '@constants/toast';
import { serviceDatas } from '@data/buttonDatas';
import { shopDatas } from '@data/shopDatas';
import { mixins } from '@styles/Mixin';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const footerShopDatas = shopDatas.map(({ children, url }) => {
  return { children, url };
});

const FooterShopAndService = () => {
  const navigate = useNavigate();

  const handleShopClick = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <FooterShopAndServiceWrapper className="bl-1 bb-1 p-5">
      <FooterInfoTittle>shop</FooterInfoTittle>
      <FooterTextButtonList>
        {footerShopDatas.map(({ children, url }) => (
          <TextButton key={uuidv4()} onClick={handleShopClick(url)}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
      <FooterInfoTittle>service</FooterInfoTittle>
      <FooterTextButtonList>
        {serviceDatas.map(children => (
          <TextButton key={uuidv4()} onClick={pageWait}>
            {children}
          </TextButton>
        ))}
      </FooterTextButtonList>
    </FooterShopAndServiceWrapper>
  );
};

const FooterShopAndServiceWrapper = styled.div`
  & > h5:nth-last-child(2) {
    margin-top: 24px;
  }
`;

const FooterTextButtonList = styled.ul`
  ${mixins.flexBox({ direction: 'column', align: 'start' })}
  gap: 8px;
`;

export default FooterShopAndService;
