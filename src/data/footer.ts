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
    content: `오늘의 꽃을 통해 발렌타인데이, 어버이날, 크리스마스...에서 아름다운 꽃을 제공하는 것을 잊지 마세요... 7일 전에 알려드립니다. 스팸 또는 주소 공유 금지`,
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
