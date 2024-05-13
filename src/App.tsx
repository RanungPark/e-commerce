import Layout from './components/common/Layout';
import Header from './components/common/Header/Tablet&Mobile';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router';
import { useEffect } from 'react';

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

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer footerData={footerData} />
    </Layout>
  );
};

export default App;
