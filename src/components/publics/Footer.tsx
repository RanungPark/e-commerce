import styled from 'styled-components';
import FooterRemind from '@pages/sections/FooterRemind';
import FooterContact from '@pages/sections/FooterContact';
import FooterAbout from '@pages/sections/FooterAbout';
import FooterShopAndService from '@pages/sections/FooterShopAndService';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterRemind />
      <FooterContact />
      <FooterShopAndService />
      <FooterAbout />
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  & > div:nth-child(odd) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default Footer;
