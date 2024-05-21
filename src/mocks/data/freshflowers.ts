import { Products, Rep } from 'src/@types/product';
import { IMG_PATH } from 'src/constants/imgPath';

export const freshflowersRep: Rep = {
  type: 'Fresh Flowers',
  img: IMG_PATH.OTHER.FreshFlowers,
};

export const products: Products[] = [
  {
    id: 1,
    name: 'Snowfall',
    price: 70,
    productImg: IMG_PATH.FLOWER.Snowfall,
    info: 'The Snowfall bouquet features elegant white roses known for their delicate fragrance, paired with seasonal greenery to enhance their pure beauty. This exquisite arrangement adds sophistication and grace to any occasion.',
  },
  {
    id: 2,
    name: `Dawn's Delight`,
    price: 70,
    productImg: IMG_PATH.FLOWER.DawnsDelight,
    info: `The Dawn's Delight bouquet showcases radiant peach and pink roses, renowned for their captivating hues and gentle scent. Accented with seasonal foliage, this arrangement brings warmth and charm to any setting.`,
  },
  {
    id: 3,
    name: 'Pink Elegance',
    price: 70,
    productImg: IMG_PATH.FLOWER.PinkElegance,
    info: 'The Pink Elegance bouquet features stunning pink roses, admired for their vibrant color and sweet fragrance. Paired with seasonal greenery, this arrangement exudes grace and sophistication.',
  },
  {
    id: 4,
    name: 'Rustic Charm',
    price: 70,
    productImg: IMG_PATH.FLOWER.RusticCharm,
    info: 'The Rustic Charm bouquet combines earthy-toned roses with wildflowers, creating a natural and charming aesthetic. Enhanced with seasonal foliage, this arrangement evokes a sense of countryside beauty.',
  },
  {
    id: 5,
    name: 'Autumn Symphony',
    price: 70,
    productImg: IMG_PATH.FLOWER.AutumnSymphony,
    info: 'The Autumn Symphony bouquet features a harmonious blend of warm-toned roses and seasonal foliage, capturing the essence of fall. This arrangement brings the vibrant colors and cozy feel of autumn indoors.',
  },
  {
    id: 6,
    name: 'Rosy Delight',
    price: 70,
    productImg: IMG_PATH.FLOWER.RosyDelight,
    info: 'The Rosy Delight bouquet features a selection of David Austin roses, celebrated for their beauty and subtle fragrance. Complemented by seasonal foliage, this arrangement enhances the sublime charm of these exquisite flowers.',
  },
  {
    id: 7,
    name: 'Serenity',
    price: 89,
    productImg: IMG_PATH.FLOWER.Serenity,
    info: 'Large exceptional bouquet composed of a selection of David Austin roses, known for their beauty and subtle fragrance. The bouquet is accompanied by seasonal foliage which will enhance these sublime flowers even',
  },
  {
    id: 8,
    name: 'Blue Harmony',
    price: 55,
    productImg: IMG_PATH.FLOWER.BlueHarmony,
    info: 'The Serenity bouquet features calming white and blue flowers, known for their peaceful and soothing presence. Paired with delicate seasonal greenery, this arrangement brings a sense of tranquility to any space.',
  },
  {
    id: 9,
    name: 'Mystical Majesty',
    price: 80,
    productImg: IMG_PATH.FLOWER.MysticalMajesty,
    info: 'The Mystical Majesty bouquet features deep purple and blue flowers, celebrated for their rich hues and enchanting allure. Accented with lush seasonal foliage, this arrangement exudes an air of mystery and elegance.',
  },
  {
    id: 10,
    name: 'Blazing Blossoms',
    price: 70,
    productImg: IMG_PATH.FLOWER.BlazingBlassoms,
    info: 'The Blazing Blossoms bouquet showcases vibrant red and orange flowers, known for their fiery colors and bold presence. Paired with seasonal greenery, this arrangement brings energy and warmth to any setting.',
  },
];
