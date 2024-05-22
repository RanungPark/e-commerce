import { PartialOptional } from "src/@types/utils";

interface HomeAboutInfo {
  title: string;
  info: string;
  isButton: boolean;
  caption: string;
}

type OptionalFromHomeAboutInfo = PartialOptional<
  HomeAboutInfo,
  'isButton' | 'caption'
>;

interface HomeAboutData {
  title: string;
  infos: OptionalFromHomeAboutInfo[];
}

export const homeAboutDatas: HomeAboutData[] = [
  {
    title: 'About us',
    infos: [
      {
        title: 'Kyiv LuxeBouquets',
        info: `We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.`,
        isButton: true,
        caption: 'our story',
      },
    ],
  },
  {
    title: 'Why choose us ?',
    infos: [
      {
        title: 'Stylish bouquets by florists',
        info: `At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.`,
      },
      {
        title: 'On-time delivery',
        info: `Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.`,
      },
      {
        title: 'Safe payment',
        info: `You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.`,
      },
      {
        title: 'Subscription by your needs',
        info: `With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You'll save time and money with this hassle-free solution to your floral needs.`,
      },
    ],
  },
];
