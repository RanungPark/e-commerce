import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header/Tablet&Mobile';
import Footer from '../Footer';

const footerData = {
  remindData: {
    content: `Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
    Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
    sharing your address`,
    input: {
      placeholder: 'Your Email',
    },
    button: {
      label: 'reined',
    },
  },
  contactData: {
    contactInfo: [
      { title: 'Address', info: '경기도 시흥지 진말로 36' },
      { title: 'Phone', info: '010-8797-1558' },
      { title: 'General Enquiry:', info: 'ckehfqkr302@gmail.com' },
    ],
  },
  shopAndServiceDate: {
    shopInfos: [
      'All Products',
      'Fresh Flowers',
      'Dried Flowers',
      'Live Plants',
      'Designer Vases',
      'Aroma Candles',
      'Freshener Diffuser',
    ],
    serviceInfo: ['Flower Subcription', 'Wedding & Event Decor'],
  },
  aboutdata: {
    aboutInfos: ['Shipping & returns', 'Terms & conditions', 'Privacy policy'],
  },
};
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer footerData={footerData} />
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 1px; */
  display: flex;
  flex-direction: column;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default Layout;
