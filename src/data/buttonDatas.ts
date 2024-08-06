import { ReactComponent as Instagram } from '@assets/icons/wght300/Brands/Instagram.svg';
import { ReactComponent as Pinterest } from '@assets/icons/wght300/Brands/Pinterest.svg';
import { ReactComponent as Facebook } from '@assets/icons/wght300/Brands/Facebook.svg';
import { ReactComponent as Twitter } from '@assets/icons/wght300/Brands/Twitter.svg';
import { ReactComponent as Telegram } from '@assets/icons/wght300/Brands/Telegram.svg';

export const SNSIconDatas = [
  { IconComponent: Instagram, SNSName: 'Instagram' },
  { IconComponent: Pinterest, SNSName: 'Pinterest' },
  { IconComponent: Facebook, SNSName: 'Facebook' },
  { IconComponent: Twitter, SNSName: 'Twitter' },
  { IconComponent: Telegram, SNSName: 'Telegram' },
];

export const menuDatas = [
  {
    to: '/login',
    children: 'Sign in',
  },
  {
    to: '/',
    children: 'Shop',
  },
  {
    to: '/servise',
    children: 'Servise',
  },
  {
    to: '/contact',
    children: 'Contact',
  },
  {
    to: '/about',
    children: 'About us',
  },
];

export const aboutDatas = [
  `Shipping & returns`,
  `Terms & conditions`,
  `Privacy policy`,
];

export const serviceDatas = ['Flower Subcription', 'Wedding & Event Decor'];
