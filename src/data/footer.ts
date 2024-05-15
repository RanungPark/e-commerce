export interface FooterData {
  remindData: {
    content: string;
    input: {
      placeholder: string;
    };
    button: {
      label: string;
    };
  };
  contactData: {
    contactInfo: { title: string; info: string }[];
  };
  shopAndServiceDate: {
    shopInfos: string[];
    serviceInfo: string[];
  };
  aboutdata: {
    aboutInfos: string[];
  };
}

export const footerData: FooterData = {
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
