import styled from 'styled-components';
import FooterRemind from '@components/fragments/FooterRemind';
import FooterContact from '@components/fragments/FooterContact';
import FooterAbout from '@components/fragments/FooterAbout';
import FooterShopAndService from '@components/fragments/FooterShopAndService';

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
